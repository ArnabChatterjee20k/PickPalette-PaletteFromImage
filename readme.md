### ToDo

- Handle edge cases when user session get expired during fetching , palettes update
- Handle edge cases of authorisation while fetching
- Handle error state of ui in projects page

### Learnings

<details>
    <summary>Zustand + React Query(Async State Management) for building auto save feature</summary>
    <p>
       <li>First of the data is brought from the server</li>
       <li>Then when user interacts with the data we cant directly send the latest changes. As user can go on changing and a lot of request will be made to the server</li>
       <li>So I am zustand store for maintaining a colors array which will point to the latest changed data. And also a timer will start which will capture all the data changes. So after that span the request will be made with the latest data. Basically we are mutating with the latest recorded data</li>
       <li>Since the client side interaction is taking place and we are recording that we are using some external store. We could have used context but since a ton of changes can be made so going for a small state management library zustand</li>
    </p>
    
</details>

<details>
    <summary>Encountering race conditions with priority and recursive algo in the color dashboard</summary>
    <p>
        <h4>The save is autosaving feature. When colors are getting uploaded to the server and suppose at that time some changes happend.
        <br>Basically a race condition</h4>
       <h3>Solutions</h3>
       <li>Lock the ui when data is getting changed or mutation is happening</li>
       <li>Built some algo to gather the data changes made during the mutation and then after the settlement of the mutation re-perform the action but with the waitlist data</li>
    </p>
    <p>
        <h4> What I have done?</h4>
       <li>I took the second approach </li>
       <li>In my autosave feature, whenever the pallets are getting changed a scheduler starts. In that span of around of 4000ms all the latest changes are getting saved and atlast the latest one gets pushed to the server</li>
       <li>But in that span of sending, all the changes are getting saved to a waitList.</li>
       <li>So a recursive process is taking place</li>
       <li>Atlast, after onSettled the waitlist is emptied to the main color stack so that it does not move into recursive hell.</li>
       <li>Indirectly its an priority system. If data is in waitlist it will be send first</li>
    </p>
</details>

</details>

<details>
    <summary>Building the manual save in an addition to the autosave and ecountering issues such autosave during manual save or manual save during autosave</summary>
    <p>
       <li>We are using scheduling system.</li>
       <li>When manual save is pressed, just clear the schedule and push the latest data</li>
       <li>If during autosave manual save is pressed, then the queue will get emptied since the latest data pushed so if no data remains in the queue , dont go for the mutation</li>
       <li>If during manual save some changes performed, stack them up. And make another request with another set of data which will be autosaving</li>
    </p>
</details>

<details>
    <summary>Using color theory for choosing the best color from inputs of color. The code is present in utils/categoriseColor.js</summary>
    <p>

1. **Define the `categorizedColors` object**: The algorithm starts by defining an object `categorizedColors` with properties for `primary`, `secondary`, `tertiary`, `background`, `text`, and `accent` colors. Initially, all these properties are set to `null`.

2. **Sort the input colors by perceived brightness**: The input array `colors` is sorted in ascending order of perceived brightness using the formula `(r * 299 + g * 587 + b * 114) / 1000`, where `r`, `g`, and `b` are the red, green, and blue values of the color, respectively. This formula approximates how humans perceive the brightness of a color.

3. **Assign the background color**: The darkest color from the sorted array (`sortedColors[0]`) is assigned to `categorizedColors.background`.

4. **Find the most visually distinct colors**: The `findBestCombination` function is used to assign the `primary`, `secondary`, and `tertiary` colors. It does this by iterating over the remaining colors (excluding the background color) and calculating the color distance between each remaining color and the already assigned colors in `categorizedColors`. The color with the maximum distance is selected as the best color for the current category (`primary`, `secondary`, or `tertiary`). This ensures that the selected colors are visually distinct from each other.

5. **Assign the text color**: The `findContrastingColor` function is used to assign the `text` color. It takes the `background` color and an array of remaining colors as input. It iterates over the remaining colors and finds the color with the maximum contrast (brightness difference) from the `background` color, ensuring that it's not equal to any of the `primary`, `secondary`, or `tertiary` colors.

6. **Assign the accent color**: The `accent` color is assigned as the lightest remaining color from the input array. This is done by creating an array `accentColors` that contains all the remaining colors that haven't been assigned to any other category (`primary`, `secondary`, `tertiary`, `background`, or `text`), and then assigning the last color in the `accentColors` array (which will be the lightest color due to the sorting) to `categorizedColors.accent`.

The core functionality of the algorithm is achieved through the following helper functions:

- `calculateColorDistance`: This function calculates the maximum color distance between a given color and the already assigned colors in `categorizedColors`. It does this by iterating over the assigned colors and calculating the Euclidean distance between the given color and each assigned color in the RGB color space. The maximum distance is returned.

- `getColorDistance`: This function calculates the Euclidean distance between two colors in the RGB color space using the formula `sqrt((r1 - r2)^2 + (g1 - g2)^2 + (b1 - b2)^2)`, where `r1`, `g1`, `b1` and `r2`, `g2`, `b2` are the red, green, and blue values of the two colors, respectively.

- `findContrastingColor`: This function takes a base color and an array of sorted colors as input. It iterates over the sorted colors and finds the color with the maximum contrast (brightness difference) from the base color. The contrast is calculated as the absolute difference between the perceived brightness of the base color and the sorted color. The color with the maximum contrast is returned, ensuring that it's not equal to the base color.

By following these steps and using the helper functions, the algorithm assigns visually distinct colors to the `primary`, `secondary`, and `tertiary` properties, finds a contrasting color for the `text` property, and assigns the lightest remaining color as the `accent` color. The `background` color is set to the darkest color from the input array. The algorithm ensures that all assigned colors are present in the input array, and it satisfies the business cases of having the `text` color distinct from `primary`, `secondary`, and `tertiary`, and the `accent` color being the lightest remaining color.

</p>

</details>
