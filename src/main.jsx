import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

### 3. GitHubへプッシュ
これらのファイルを作成したら、GitHubへ送ります。

```bash
git add index.html src/main.jsx
git commit -m "Add index.html and main.jsx for Vite entry"
git push origin main
