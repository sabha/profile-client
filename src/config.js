const config = {
  s3: { REGION: "us-east-1", BUCKET: "arts-app-upload" },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://4o4ld53xkb.execute-api.us-east-1.amazonaws.com/dev",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_JfM8LcEYy",
    APP_CLIENT_ID: "2evou4sgn9a3ga9ekvdhbonndh",
    IDENTITY_POOL_ID: "us-east-1:f5df4056-6cba-497b-91de-9b29b9795ba7",
  },
  STRIPE_KEY:
    "pk_test_51ImVUJDbkvlJpr0KEoqmuGjnEFNeMlQZQ2bzyPvB8gaD8joEclkCeAYfvVYMxp9IXfs7QLBfH0byg2eqctnQJR4s00fBps9Iln",
};

export default config;
