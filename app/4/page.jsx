export default function Four() {
  return (
    <main>
      <h2>Question 4</h2>
      <h3>A customer has a project on Vercel and they want to redirect the /blog path to another website. Please write a reply to the customer. Separately, list any relevant documentation you found and any feedback or information you’d like to share about your decision making process.</h3>
      <br />
      <p> Hello,
      <br />
      <br />
      Thank you for writing in.
      <br />
      <br />
      My name is Nic, and I will handle your support request today. You would like to redirect the /blog path to another website. No problem at all! A Rewrite, which allows you to send users to different URLs without modifying the visible URL, will do the trick. Doing this does not change the original URL; it simply serves the content of the rule destination at the original path. Below are step-by-step instructions with a code snippet to help you do that.
      <br />
      <br />
      Instructions: If you do not already have a vercel.json file, please create one at the root of your app and copy and paste the code snippet below. Please replace the destination with the URL of the other website you want your users to visit when clicking the /blog path.
      <br />
      <code>
      {`{`}<br/>
      {`"rewrites": [}`}<br/>
      {`{`}<br/>
      {`"source": "/api/:path*",`}<br/>
      {`"destination": "https://api.example.com/:path*"`}<br/>
      {`}`}<br/>
      {`]`}<br/>
      {`}`}<br/>
      </code>
      <br />
      Rewrites: https://vercel.com/docs/edge-network/rewrites
      <br />
      Enhancing Security for Redirect and Rewrites: https://vercel.com/guides/enhancing-security-for-redirects-and-rewrites
      <br />
      <br />
      If there are any persistent issues, feel free to let me know. I'll jump on a quick Zoom call to hammer things out. I'll wait for your reply. Most importantly, have a fantastic weekend!</p>
    </main>
  )
}
