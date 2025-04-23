// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { RootStore } from './store/rootStore'
import { StoreProvider } from './store/storeContext'
import {ConfigProvider} from 'antd'
import '@ant-design/v5-patch-for-react-19'
import {StyleProvider} from "@ant-design/cssinjs";


const rootStore = new RootStore()

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
    <StyleProvider layer>
        <ConfigProvider theme={{ cssVar: !0,hashed:!1,token:{
                colorPrimary: '#4F46E5',
            } }}>
            <StoreProvider store={rootStore}>
                <App />
            </StoreProvider>
        </ConfigProvider>
    </StyleProvider>


  // </StrictMode>,
)
