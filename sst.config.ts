/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      home: "aws",
      name: "aws-astro",
      removal: input?.stage === "production" ? "retain" : "remove",
      protect: ["production"].includes(input?.stage),
      providers: {
        aws: {
          profile: input?.stage === "production" ? "production" : "dev",
        },
      }
    };
  },
  async run() {
    new sst.aws.Astro("MyWeb");
  },
});
