import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
export default NextAuth({
	// Configure one or more authentication providers
	providers: [
		GoogleProvider({
			clientId: process.env.NEXT_PUBLIC_GOOGLE_ID!,
			clientSecret: process.env.NEXT_PUBLIC_GOOGLE_SECRET!,
		}),
		// ...add more providers here
	],

	pages: {
		signIn: '/auth/signin',
	},

	secret: process.env.SECRET,

	callbacks: {
		async session({ session, token }: any) {
			session.user.username =
				'@' + session.user.name.split(' ').join('').toLowerCase()

			session.user.id = token.sub
			return session
		},
	},
})
