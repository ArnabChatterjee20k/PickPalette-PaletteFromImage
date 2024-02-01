import supabaseClient from "../supabaseClient";
export default async function getCurrentSessionToken(){
    const session = (await supabaseClient.auth.getSession()).data.session;
    return session.access_token;
}