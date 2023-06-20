import "@styles/globals.css";

import Nav from "@components/Nav";
import Provider from "@components/Provider";
import ReduxProvider from "@redux/provider";
// import persistGateComponent from "@redux/persistGate";
export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <ReduxProvider>
            {/* <persistGateComponent> */}
            <div className="main">
              <div className="gradient" />
            </div>
            <main className="app">
              <Nav />
              {children}
            </main>
            {/* </persistGateComponent> */}
          </ReduxProvider>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
