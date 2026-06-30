import { createClient } from 'contentful';

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID as string || 'placeholder',
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN as string || 'placeholder',
});

export default client;
