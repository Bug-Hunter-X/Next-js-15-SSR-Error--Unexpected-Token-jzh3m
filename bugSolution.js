```javascript
// pages/index.js
export async function getServerSideProps(context) {
  try {
    // Fetch data (replace with your actual data fetching logic)
    const res = await fetch('https://api.example.com/data');
    const data = await res.json();

    if (!res.ok) {
      // Handle errors appropriately
      throw new Error(`Data fetching failed: ${res.status} ${res.statusText}`);
    }

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);

    // Return a fallback or error page
    return {
      props: {
        error: error.message,
      },
    };
  }
}

export default function Home({ data, error }) {
  if (error) {
    return (
      <div>
        <h1>Error: {error}</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <p>Data: {JSON.stringify(data)}</p>
    </div>
  );
}
```