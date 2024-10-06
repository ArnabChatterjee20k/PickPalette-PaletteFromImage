import React from "react";
import { PassThrough } from "node:stream";
import { renderToString } from "react-dom/server";
import { ServerStyleSheet } from "styled-components";

import type { AppLoadContext, EntryContext } from "@remix-run/node";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";

const ABORT_DELAY = 5_000;

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
  loadContext: AppLoadContext
) {
  return isbot(request.headers.get("user-agent") || "")
    ? handleBotRequest(
        request,
        responseStatusCode,
        responseHeaders,
        remixContext
      )
    : handleBrowserRequest(
        request,
        responseStatusCode,
        responseHeaders,
        remixContext
      );
}

function handleBotRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  return new Promise((resolve, reject) => {
    const sheet = new ServerStyleSheet();

    const { pipe, abort } = renderToPipeableStream(
      sheet.collectStyles(
        <RemixServer
          context={remixContext}
          url={request.url}
          abortDelay={ABORT_DELAY}
        />
      ),
      {
        onAllReady() {
          const body = new PassThrough();

          responseHeaders.set("Content-Type", "text/html");

          const styles = sheet.getStyleTags();
          const bodyWithStyles = new PassThrough();
          bodyWithStyles.write(
            "<!DOCTYPE html><html><head>" + styles + "</head><body>"
          );
          body.pipe(bodyWithStyles, { end: false });
          body.on("end", () => {
            bodyWithStyles.end("</body></html>");
          });

          resolve(
            new Response(createReadableStreamFromReadable(bodyWithStyles), {
              headers: responseHeaders,
              status: responseStatusCode,
            })
          );

          pipe(body);
        },
        onShellError(error: unknown) {
          reject(error);
        },
        onError(error: unknown) {
          responseStatusCode = 500;
          console.error(error);
        },
      }
    );

    setTimeout(abort, ABORT_DELAY);
  });
}

function handleBrowserRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  return new Promise((resolve, reject) => {
    const sheet = new ServerStyleSheet();

    const { pipe, abort } = renderToPipeableStream(
      sheet.collectStyles(
        <RemixServer
          context={remixContext}
          url={request.url}
          abortDelay={ABORT_DELAY}
        />
      ),
      {
        onShellReady() {
          const body = new PassThrough();

          responseHeaders.set("Content-Type", "text/html");

          const styles = sheet.getStyleTags();
          const bodyWithStyles = new PassThrough();
          bodyWithStyles.write(
            "<!DOCTYPE html><html><head>" + styles + "</head><body>"
          );
          body.pipe(bodyWithStyles, { end: false });
          body.on("end", () => {
            bodyWithStyles.end("</body></html>");
          });

          resolve(
            new Response(createReadableStreamFromReadable(bodyWithStyles), {
              headers: responseHeaders,
              status: responseStatusCode,
            })
          );

          pipe(body);
        },
        onShellError(error: unknown) {
          reject(error);
        },
        onError(error: unknown) {
          console.error(error);
          responseStatusCode = 500;
        },
      }
    );

    setTimeout(abort, ABORT_DELAY);
  });
}
