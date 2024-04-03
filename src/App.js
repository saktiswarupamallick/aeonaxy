import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DemoComponent from "./DemoComponent";
import DemoComponent2 from "./DemoComponent2";
import DemoComponent3 from "./DemoComponent3";
import DemoComponent4 from "./DemoComponent4";
import DemoComponent5 from "./DemoComponent5";
import Spinner from "./Spinner";
import DemoComponent7 from "./DemoComponent7";

const App = () => (
  <Routes>
    <Route path="/" element={<DemoComponent />} />
    <Route path="/DemoComponent2" element={<DemoComponent2 />} />
    <Route path="/DemoComponent3" element={<DemoComponent3 />} />
    <Route path="/DemoComponent4" element={<DemoComponent4 />} />
    <Route path="/DemoComponent5" element={<DemoComponent5 />} />
    <Route path="/spinner" element={<Spinner />} />
    <Route path="/DemoComponent7" element={<DemoComponent7 />} />
  </Routes>
);

export default App;
