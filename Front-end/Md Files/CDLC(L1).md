### DAY ☀️: Using Bootstrap in React.js

**Created by:**  
Name: Dhiraj Kr.  
Profession: Data Scientist & GenAI Developer

---

### 1. How to Use Bootstrap in React.js
1. **Install Bootstrap**  
   Open your project in the terminal and run:
   ```bash
   npm install bootstrap
   ```
2. **Import Bootstrap in Your Project**  
   Add the following line at the top of `src/index.js`:
   ```javascript
   import 'bootstrap/dist/css/bootstrap.min.css';
   ```

---

### 2. Folder Structure
Here's a typical folder layout:
```
project-folder
  ├── public
  │   └── index.html
  ├── src
  │   ├── App.js
  │   ├── index.css
  │   └── index.js
  └── package.json
```

---

### 3. Simple Example in App.js Using Alert
```javascript
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container mt-5">
      <div className="alert alert-success" role="alert">
        This is a success alert—check it out!
      </div>
      <div className="alert alert-danger" role="alert">
        This is a danger alert—something went wrong!
      </div>
      <div className="alert alert-warning" role="alert">
        This is a warning alert—be careful!
      </div>
      <div className="alert alert-info" role="alert">
        This is an info alert—just so you know!
      </div>
    </div>
  );
}

export default App;
```

---

### 4. Explanation
- **Installing Bootstrap**  
  Use `npm install bootstrap` to add Bootstrap to your project.
- **Importing Bootstrap**  
  Import the Bootstrap CSS in `index.js` to apply Bootstrap styles globally.
- **Using Alert Components**  
  - **Classes Used**: `alert`, `alert-success`, `alert-danger`, `alert-warning`, `alert-info` are Bootstrap classes for different alert types.
  - **Accessibility**: `role="alert"` makes the alerts accessible, ensuring screen readers announce them properly.

---

**End of Document** ✨

