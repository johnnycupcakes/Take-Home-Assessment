export default function One() {
  return (
    <main>
      <h2>Question 1</h2>
      <h3>Describe how you solved a challenge that one of your previous teams faced. How did you determine your solution was successful?</h3>
      <br />
      <p>While working at FireHydrant, there was a data integrity issue on post-mortems for the largest customer responsible for 60% of ARR. The customer noticed that post-mortem data was blank when hitting the GET a Report endpoint and created a Google Spreadsheet with all the impacted IDs. My first step was to check the post-mortem data in my test account on the exact dates to verify if the issue affected all users. After confirming that the post-mortem data in my account was accurate, I made an access request, logged in to the customer's account, and visited the same API endpoint in the web browser. For all impacted post-mortem IDs, there were two incident IDs: the first ID with no answers to post-mortem questions and a second ID that contained the actual post-mortem responses.
      <br />
      <br />
      I had to replicate any customer issue before creating a fix-it ticket for the FireHdrant engineering team. I tested using the post-mortem report offered within the website and made POST requests to create new post-mortems. Neither option resulted in blank data, so I contacted the customer for additional details. The customer informed me that several teams often work simultaneously on the same post-mortem. This critical detail gave me the idea to test using my work and personal computer. When clicking "Start post-mortem" as two different users simultaneously, the data produced a blank copy for the first user, ignoring all the data they entered and only saving the data entered by the second user.
      <br />
      <br />
      After successfully replicating the issue in my account, I created a fix-it ticket, including reproduction steps, the blank data from my account, and a Loom video showing the UI from both user's points of view. The issue was that post-mortems were intended to be a one-to-one relationship and did not account for a many-to-one situation. The fix was released the same day, allowing the first user to click "Start post-mortem" but any following users would receive an error. Additionally, I wrote a script for the customer's historical data that ignored the first blank ID and only captured the second ID containing actual post-mortem data.</p>
    </main>
  )
}
