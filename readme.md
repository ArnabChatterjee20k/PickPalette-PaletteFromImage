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
