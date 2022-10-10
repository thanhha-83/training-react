import './App.css'
import React from 'react';

// Ví dụ trong khóa học using react 17 hooks started trên phluralsight
import InputElement from './using-hook/useState-useRef-useEffect';
import ImageToggleOnMouse from './using-hook/useState-useRef-useEffect/ImageToggleOnMouse';
import ImageToggleOnScroll from './using-hook/useState-useRef-useEffect/ImageToggleOnScroll';
import InputElementV2 from './using-hook/useContext-useReducer-useCallback-useMemo';
import CatArea from './using-hook/useContext-useReducer-useCallback-useMemo/CatArea';
import EmailValidatingForm from './using-hook/combine-existing-react-hooks/EmailValidatingForm';
import { GlobalProvider } from './using-hook/useContext-useReducer-useCallback-useMemo/GlobalState';
import { FavoriteClickCountProvider } from './using-hook/useContext-useReducer-useCallback-useMemo/FavoriteClickCountContext';

import AdvancedApp from './advanced-react/fullstack-javascript-with-reactjs/AdvancedApp';
import { testData } from './advanced-react/fullstack-javascript-with-reactjs/testData';

export const ConfigContext = React.createContext();

const configValue = {
  showCatSexCheckbox: true,
  showSignMeUp: true
}

function Phase2() {
  return (
    <ConfigContext.Provider value={configValue}>
      <GlobalProvider>
        <FavoriteClickCountProvider>
          <section className='phluralsight'>
            <h2>III. Bài tập React Hook trong khóa ReactJS phluralsight</h2>

            <h3>2. Start Using React Hooks with useState, useEffect, and useRef</h3>
            <div className='wrapper-box'>
              <h4 className='bg-cyan'>a/ useState</h4>
              <InputElement />

              <h4 className='bg-cyan'>b/ useRef</h4>
              <ImageToggleOnMouse />

              <h4 className='bg-cyan'>b/ useEffect</h4>
              <ImageToggleOnScroll />
            </div>

            <h3>3. Using more Hooks: useContext, useReducer, useCallback and useMemo</h3>
            <div className='wrapper-box'>
              <CatArea />
            </div>

            <h3>5. Learn How to Combine Existing React Hooks into New Combined Hooks</h3>
            <div className='wrapper-box'>
              <EmailValidatingForm />
            </div>
          </section>
          <section className='phluralsight'>
            <h2>IV. Bài tập Advanced React.JS 17 phluralsight</h2>

            <h3>3. Fullstack javascript với React.JS</h3>
            <div className='wrapper-box'>
            <AdvancedApp articles={testData.data.articles} authors={testData.data.authors} />,
            </div>
          </section>
        </FavoriteClickCountProvider>
      </GlobalProvider>
    </ConfigContext.Provider>
  );
}

export default Phase2;
