// import { FirestoreAdapter } from "@auth/firebase-adapter";
import GoogleProvider from "next-auth/providers/google";

// import { cert } from "firebase-admin/app";
import {
  GetServerSidePropsContext,
  NextApiRequest,
  NextApiResponse,
} from "next";
import NextAuth, { NextAuthOptions, getServerSession } from "next-auth";

export interface RootSession {
  data: Data;
  status: string;
}

export interface Data {
  user: User;
  expires: string;
}

export interface User {
  id: string;
  image: string;
  emailVerified: any;
  name: string;
  email: string;
}

const authOptions: NextAuthOptions = {
  secret: "kdfaosdhfodsahfosahdfohaspf82y40234ufan8yr902hrff-29",
  providers: [
    GoogleProvider({
      clientId:
        "884484804586-ri8hajuv40nrk2g04hfuf7t1vt0km0f9.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
  // adapter: <any>FirestoreAdapter({
  //   credential: cert({
  //     clientEmail:
  //       "firebase-adminsdk-loh7q@ubai-delivery.iam.gserviceaccount.com",
  //     privateKey:
  //       "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDaVo1zPoVqvQ2/\nXEaKUCLu1ppsiyr6fr7vg2PPzxz4qYswyZIC5bF1l7xdj/+bQ6RkzsVa2VzBPS4F\n5JeUTjG+9VnU426rlj9G42JOFCMfwE7o4wgz0vu9GiM8gkvR0um3ZxbUq35fVFGq\noE4wDZuvxKRvoS6alGi+b7+DQmDxGreCkAz0Nlq9zUQVO8zrrsQWNPoXELVbUlZX\n3ozSY4BDPsDcUkd9Une9WByT4wHpPxqzl7P5rxJOhyvoguYdH8zeq05BqR/AH3Vk\nz2LqVIviU8mlbG6s6bcaECa58/E5Fj6nGDU2txhK91DKISDEpdV84OQqo5ugGnyT\nqW0fcZjHAgMBAAECggEABZsKExBi3bewd6sUOih084umkVNAk9SkBracqtD9d6Dn\nhiW9GvGJjQq+3YQWvIZcqfEcStXT0ASuS5zWPqRQ5wwAXDsVAOpgzrgdzDVi8kWL\nGrP7GbsfMKuDUuIuTvSXgL7wn7f7czhRLgx8yJ0NoNI8Pb8P2QyNMX56/N3vN6Fu\nbhiyjgdW0tN7u5TGolw38qyDOQkHem4m6tVoRofBQ+5HSf8EYmbbQ4g0WTB3s3o5\nCfb5fo9Val3A5pEun6VXFwdTJz8zNfyK6LDSwVlWruY7zlqM4/8jB2nvOSNwUw9e\nXC3QDbF+alJ/Rz8gdoL4+fL0Ty47X1omVZ8i1WGHyQKBgQDsrPG1kJT1krEZOTOq\ngRSTxBBsa7JSwd1mY8QxTjA4LUKh/RVhYiIxYcTtNiK1pusO27U6ZIX64TIbY3Ok\nvrDhcIs21mxueHI2dxYss2enmJCwSeEgn1uNAnHvjU4cyNBS7mp9BiaLIcws9YIb\nTPD25Cmc4TiuioE9CRSLh8R2NQKBgQDsKlBQOBpAalNPqzzGQaL/Ke/OGIKMTwXJ\nrQg0hAslccxIdQ366rVz+QE0U7zQseSY4lHd6tg294P53LaWHBKrG5lyCoKUUEPL\nYl5X7yjFdSqp5dITg/Nl7GJDuwQeuzx8FcPthAoo9JHmIP9X3R8Nvj7clPOe6hjL\nNxqUCpUCiwKBgEAWLHUvq0Y77HyaAqV+wmWox5G0L9s854icJzn6pA/yIYLflvSB\nsCSTBtH8wLVTd37Ue2ROaAEhDYJhEaVghWDmKqw0r7PSJYseAAEmq0C0jSlPOAiv\nXgj2yodFSgt9TPvH10n3amRuSG08JXjjArS335S9X63Tj19JoCiQIOCpAoGBAMhx\ngYkUlPNnSx6rcAG1Y+q+ZVK/as47o+Xwfq5UBEHbvE8jSqJU431zMpp/GBrpYeSA\n8osv8CN3IQTJWA8/9HhWDH7GfN304hWVgA2SZ0Bwma1p6ku2CrfPUfe6m1yZ/lQz\nBQBquVTZf5ubFh41B05a0m/V3JBckH6qXlyYPrDRAoGBAJNs4MtBD1SJr2lFn8Ql\ngmMDLmjVrrzXwLnnM1sc5Mb7sXW4VALoVoQtocZhKA2vg4nTnJ1Bn2iaIN4U/iDG\nLsG919Ctz9CAOACN+Ua83dtw8vgBNQ1JevrLcYHSgk0+0LH/AJm2ZEZy8dDrIRTg\nhJ03mcVRgzc5UVNfNnleBTOe\n-----END PRIVATE KEY-----\n".replace(
  //         /\\n/g,
  //         "\n",
  //       ),
  //     projectId: "ubai-delivery",
  //   }),
  // }),
  callbacks: {
    session({ session, user, token }) {
      return {
        ...session,
        user,
        token,
      };
    },
  },
};

export function auth(
  ...args:
    | [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]]
    | [NextApiRequest, NextApiResponse]
    | []
) {
  return getServerSession(...args, authOptions);
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST, authOptions };
