import '../styles/main.scss'

import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
	console.log(pageProps)
	return (
		<SessionProvider session={session}>
			<Component {...pageProps} />
		</SessionProvider>
	)
}

export default App
