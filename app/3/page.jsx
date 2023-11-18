export default function Three() {
  return (
    <main>
      <h2>Question 3</h2>
      <h3>When would you choose to use Edge Functions, Serverless Functions, or Edge Middleware with Vercel?</h3>
      <br />
      <p>Edge functions are used for low global latency and to be cost-effective. Any code under 1MB of memory lower than 128MB that does not need Node API support can be used with edge functions. However, Serverless functions must be used for Node API support, code above 1MB, and memory above 128MB. Serverless functions handle API routes, server rendering, and ISR. Edge middleware helps intercept requests coming to serverless functions and can handle redirects, rewrites, headers, A/B testing, or Feature Flags.</p>
    </main>
  )
}
