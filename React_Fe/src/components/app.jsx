import React, { useState } from 'react'
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom'
import CookieBar from './cookieBar'
import Header from './header'
import Footer from './footer'
import HomepageWrapper from './homepageWrapper'
import MovieDetailsWrapper from './movieDetailsWrapper'
import Page404 from './404'
import LangSelector from './langSelector'
import urlParamFinder from './../lib/urlParamFinder'
import PrivateRoute from './privateRoute';
import SignIn from './signin';
import Register from './register';

export default function App() {
  const [lang] = useState(urlParamFinder() || 'en')

  return (
    <div className='App'>
      <nav className='lang-position'>
        <LangSelector lang={lang} currentLang='en' /> <LangSelector lang={lang} currentLang='sv' />
      </nav>
      {/* <CookieBar lang={lang} /> */}
      <Header lang={lang} />
      <BrowserRouter>
        <Switch>
          <Route path='/signin' component={SignIn} />
          <Route path='/register' component={Register} />
          <PrivateRoute exact path='/:lang' component={HomepageWrapper} />
          <Redirect exact from='/' to={`/${lang}`} />
          <PrivateRoute path='/:lang/movie/:id' component={MovieDetailsWrapper} />
          <Route component={Page404} />
        </Switch>
      </BrowserRouter>
      <Footer lang={lang} />
    </div>
  )
}
