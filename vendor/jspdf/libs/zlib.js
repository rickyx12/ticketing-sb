





<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
  <link rel="dns-prefetch" href="https://assets-cdn.github.com">
  <link rel="dns-prefetch" href="https://avatars0.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars1.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars2.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars3.githubusercontent.com">
  <link rel="dns-prefetch" href="https://github-cloud.s3.amazonaws.com">
  <link rel="dns-prefetch" href="https://user-images.githubusercontent.com/">



  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/frameworks-7a12427f1445.css" integrity="sha512-ehJCfxRFqU8Lt/+Hwc4cvp41sPisCp1U2d03SlbM3aKVZcxiYDTVmBsAtOVgAtZ912JFOebwrPXr/JcDNd6bGA==" media="all" rel="stylesheet" />
  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-9a96827cb922.css" integrity="sha512-mpaCfLkiGm0lO5keG4/5ccr1UNm2O+bK5k1ucCQLBVM3EQIBwYScL9CWOnO78869J04UQzs2DQQxvhNg+3qw0g==" media="all" rel="stylesheet" />
  
  
  
  

  <meta name="viewport" content="width=device-width">
  
  <title>jsPDF/zlib.js at master · MrRio/jsPDF</title>
  <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">

    
    <meta content="https://avatars2.githubusercontent.com/u/47539?s=400&amp;v=4" property="og:image" /><meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="MrRio/jsPDF" property="og:title" /><meta content="https://github.com/MrRio/jsPDF" property="og:url" /><meta content="jsPDF - Client-side JavaScript PDF generation for everyone." property="og:description" />

  <link rel="assets" href="https://assets-cdn.github.com/">
  <link rel="web-socket" href="wss://live.github.com/_sockets/VjI6MjM5NzM2OTMxOjE5Yjk3MTcwOTBkOTdlYTZjNjBmMGJmZmQwZmM4MThhMTg2MWJlYjE4NDRjOWI4YzUwZmZlZWVkNjRiMjA0MDQ=--5d3452ba4366f18198b86d0ef59301c3b45ba916">
  <meta name="pjax-timeout" content="1000">
  <link rel="sudo-modal" href="/sessions/sudo_modal">
  <meta name="request-id" content="EA7D:2148:126A35:199924:5A94F40A" data-pjax-transient>
  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
  <meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
  <meta name="google-site-verification" content="GXs5KoUUkNCoaAZn7wPN-t01Pywp9M3sEjnt_3_ZWPc">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="https://collector.githubapp.com/github-external/browser_event" name="octolytics-event-url" /><meta content="EA7D:2148:126A35:199924:5A94F40A" name="octolytics-dimension-request_id" /><meta content="1" name="octolytics-dimension-region_edge" /><meta content="iad" name="octolytics-dimension-region_render" /><meta content="7259786" name="octolytics-actor-id" /><meta content="rickyx12" name="octolytics-actor-login" /><meta content="d5b28c18b60da92c9e519b0aff7292c6a7b3cee03220aa925b29bfa38e736b48" name="octolytics-actor-hash" />
<meta content="https://github.com/hydro_browser_events" name="hydro-events-url" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />




  <meta class="js-ga-set" name="dimension1" content="Logged In">


  

      <meta name="hostname" content="github.com">
    <meta name="user-login" content="rickyx12">

      <meta name="expected-hostname" content="github.com">
    <meta name="js-proxy-site-detection-payload" content="YzU3NWZjZjc3ZGRkYjUxOWYxYjZhZGU3YzRkZmExYWQ1YWNiNzE1OWExZWFjNTBlOGMyNzEzMWQ5ZDU5NzdjNXx7InJlbW90ZV9hZGRyZXNzIjoiMjE5LjkwLjkwLjIiLCJyZXF1ZXN0X2lkIjoiRUE3RDoyMTQ4OjEyNkEzNToxOTk5MjQ6NUE5NEY0MEEiLCJ0aW1lc3RhbXAiOjE1MTk3MTEyNjAsImhvc3QiOiJnaXRodWIuY29tIn0=">

    <meta name="enabled-features" content="UNIVERSE_BANNER,FREE_TRIALS,MARKETPLACE_HERO_CARD_UPLOADER,MARKETPLACE_INSIGHTS,MARKETPLACE_INSIGHTS_CONVERSION_PERCENTAGES">

  <meta name="html-safe-nonce" content="ca675a6c73d88ab88614ce9ee809f75c849300be">

  <meta http-equiv="x-pjax-version" content="f55e36d043c8e7ec099d430ad5ed00ef">
  

      <link href="https://github.com/MrRio/jsPDF/commits/master.atom" rel="alternate" title="Recent Commits to jsPDF:master" type="application/atom+xml">

  <meta name="description" content="jsPDF - Client-side JavaScript PDF generation for everyone.">
  <meta name="go-import" content="github.com/MrRio/jsPDF git https://github.com/MrRio/jsPDF.git">

  <meta content="47539" name="octolytics-dimension-user_id" /><meta content="MrRio" name="octolytics-dimension-user_login" /><meta content="402046" name="octolytics-dimension-repository_id" /><meta content="MrRio/jsPDF" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="402046" name="octolytics-dimension-repository_network_root_id" /><meta content="MrRio/jsPDF" name="octolytics-dimension-repository_network_root_nwo" /><meta content="false" name="octolytics-dimension-repository_explore_github_marketplace_ci_cta_shown" />


    <link rel="canonical" href="https://github.com/MrRio/jsPDF/blob/master/libs/png_support/zlib.js" data-pjax-transient>


  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#000000">
  <link rel="icon" type="image/x-icon" class="js-site-favicon" href="https://assets-cdn.github.com/favicon.ico">

<meta name="theme-color" content="#1e2327">


  <meta name="u2f-support" content="true">

<link rel="manifest" href="/manifest.json" crossOrigin="use-credentials">

  </head>

  <body class="logged-in env-production page-blob">
    

  <div class="position-relative js-header-wrapper ">
    <a href="#start-of-content" tabindex="1" class="bg-black text-white p-3 show-on-focus js-skip-to-content">Skip to content</a>
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"><div class="progress"></div></div>

    
    
    



        
<header class="Header  f5" role="banner">
  <div class="d-flex px-3 flex-justify-between container-lg">
    <div class="d-flex flex-justify-between ">
      <div class="">
        <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <svg aria-hidden="true" class="octicon octicon-mark-github" height="32" version="1.1" viewBox="0 0 16 16" width="32"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>

      </div>

    </div>

    <div class="HeaderMenu d-flex flex-justify-between flex-auto">
      <div class="d-flex">
            <div class="">
              <div class="header-search scoped-search site-scoped-search js-site-search" role="search">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/MrRio/jsPDF/search" class="js-site-search-form" data-scoped-search-url="/MrRio/jsPDF/search" data-unscoped-search-url="/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <label class="form-control header-search-wrapper js-chromeless-input-container">
        <a href="/MrRio/jsPDF/blob/master/libs/png_support/zlib.js" class="header-search-scope no-underline">This repository</a>
      <input type="text"
        class="form-control header-search-input js-site-search-focus js-site-search-field is-clearable"
        data-hotkey="s"
        name="q"
        value=""
        placeholder="Search"
        aria-label="Search this repository"
        data-unscoped-placeholder="Search GitHub"
        data-scoped-placeholder="Search"
        autocapitalize="off">
        <input type="hidden" class="js-site-search-type-field" name="type" >
    </label>
</form></div>

            </div>

          <ul class="d-flex pl-2 flex-items-center text-bold list-style-none" role="navigation">
            <li>
              <a href="/pulls" aria-label="Pull requests you created" class="js-selected-navigation-item HeaderNavlink px-2" data-ga-click="Header, click, Nav menu - item:pulls context:user" data-hotkey="g p" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls">
                Pull requests
</a>            </li>
            <li>
              <a href="/issues" aria-label="Issues you created" class="js-selected-navigation-item HeaderNavlink px-2" data-ga-click="Header, click, Nav menu - item:issues context:user" data-hotkey="g i" data-selected-links="/issues /issues/assigned /issues/mentioned /issues">
                Issues
</a>            </li>
                <li>
                  <a href="/marketplace" class="js-selected-navigation-item HeaderNavlink px-2" data-ga-click="Header, click, Nav menu - item:marketplace context:user" data-selected-links=" /marketplace">
                    Marketplace
</a>                </li>
            <li>
              <a href="/explore" class="js-selected-navigation-item HeaderNavlink px-2" data-ga-click="Header, click, Nav menu - item:explore" data-selected-links="/explore /trending /trending/developers /integrations /integrations/feature/code /integrations/feature/collaborate /integrations/feature/ship showcases showcases_search showcases_landing /explore">
                Explore
</a>            </li>
          </ul>
      </div>

      <div class="d-flex">
        
<ul class="user-nav d-flex flex-items-center list-style-none" id="user-links">
  <li class="dropdown js-menu-container">
    <span class="d-inline-block  px-2">
      
    <a href="/notifications" aria-label="You have no unread notifications" class="notification-indicator tooltipped tooltipped-s  js-socket-channel js-notification-indicator" data-channel="notification-changed:7259786" data-ga-click="Header, go to notifications, icon:read" data-hotkey="g n">
        <span class="mail-status "></span>
        <svg aria-hidden="true" class="octicon octicon-bell" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 12v1H0v-1l.73-.58c.77-.77.81-2.55 1.19-4.42C2.69 3.23 6 2 6 2c0-.55.45-1 1-1s1 .45 1 1c0 0 3.39 1.23 4.16 5 .38 1.88.42 3.66 1.19 4.42l.66.58H14zm-7 4c1.11 0 2-.89 2-2H5c0 1.11.89 2 2 2z"/></svg>
</a>
    </span>
  </li>

  <li class="dropdown js-menu-container">
    <details class="dropdown-details details-reset js-dropdown-details d-flex px-2 flex-items-center">
      <summary class="HeaderNavlink"
         aria-label="Create new…"
         data-ga-click="Header, create new, icon:add">
        <svg aria-hidden="true" class="octicon octicon-plus float-left mr-1 mt-1" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 9H7v5H5V9H0V7h5V2h2v5h5z"/></svg>
        <span class="dropdown-caret mt-1"></span>
      </summary>

      <ul class="dropdown-menu dropdown-menu-sw">
        
<a class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>

  <a class="dropdown-item" href="/new/import" data-ga-click="Header, import a repository">
    Import repository
  </a>

<a class="dropdown-item" href="https://gist.github.com/" data-ga-click="Header, create new gist">
  New gist
</a>

  <a class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>



  <div class="dropdown-divider"></div>
  <div class="dropdown-header">
    <span title="MrRio/jsPDF">This repository</span>
  </div>
    <a class="dropdown-item" href="/MrRio/jsPDF/issues/new" data-ga-click="Header, create new issue">
      New issue
    </a>

      </ul>
    </details>
  </li>

  <li class="dropdown js-menu-container">

    <details class="dropdown-details details-reset js-dropdown-details d-flex pl-2 flex-items-center">
      <summary class="HeaderNavlink name mt-1"
        aria-label="View profile and more"
        data-ga-click="Header, show menu, icon:avatar">
        <img alt="@rickyx12" class="avatar float-left mr-1" src="https://avatars0.githubusercontent.com/u/7259786?s=40&amp;v=4" height="20" width="20">
        <span class="dropdown-caret"></span>
      </summary>

      <ul class="dropdown-menu dropdown-menu-sw">
        <li class="dropdown-header header-nav-current-user css-truncate">
          Signed in as <strong class="css-truncate-target">rickyx12</strong>
        </li>

        <li class="dropdown-divider"></li>

        <li><a class="dropdown-item" href="/rickyx12" data-ga-click="Header, go to profile, text:your profile">
          Your profile
        </a></li>
        <li><a class="dropdown-item" href="/rickyx12?tab=stars" data-ga-click="Header, go to starred repos, text:your stars">
          Your stars
        </a></li>
          <li><a class="dropdown-item" href="https://gist.github.com/" data-ga-click="Header, your gists, text:your gists">Your gists</a></li>

        <li class="dropdown-divider"></li>

        <li><a class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">
          Help
        </a></li>

        <li><a class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">
          Settings
        </a></li>

        <li><!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="tc70vIy/U8bD3oUdpCW9pssnl+jysxnKaeot7Fuw7vLpFmx5/qD6+0KWyb0JmwDIUkf0eUm3DevB/6rbILj5yQ==" /></div>
          <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
            Sign out
          </button>
        </form></li>
      </ul>
    </details>
  </li>
</ul>



        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/logout" class="sr-only right-0" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="fTZvw8xLQhV4QdyVzZ6ZSgExA42A913Y8vehBewWoSoh7vcGvlTrKPkJkDVgICQkmFFgHDvzSfla4iYylx62EQ==" /></div>
          <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
            Sign out
          </button>
</form>      </div>
    </div>
  </div>
</header>

      

  </div>

  <div id="start-of-content" class="show-on-focus"></div>

    <div id="js-flash-container">
</div>



  <div role="main" class="application-main ">
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode" class="">
    <div id="js-repo-pjax-container" data-pjax-container >
      







  <div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav  ">
    <div class="repohead-details-container clearfix container">

      <ul class="pagehead-actions">
  <li>
        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="StCMXtFj1oAs2hCBXr4QCHaJkgnWvuTurhdG0yoqnZiOYZmnCha2sJj6e8E4RbcKYnPkDZzya9QfJfmnMzJ/IQ==" /></div>      <input class="form-control" id="repository_id" name="repository_id" type="hidden" value="402046" />

        <div class="select-menu js-menu-container js-select-menu">
          <a href="/MrRio/jsPDF/subscription"
            class="btn btn-sm btn-with-count select-menu-button js-menu-target"
            role="button"
            aria-haspopup="true"
            aria-expanded="false"
            aria-label="Toggle repository notifications menu"
            data-ga-click="Repository, click Watch settings, action:blob#show">
            <span class="js-select-button">
                <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                Watch
            </span>
          </a>
          <a class="social-count js-social-count"
            href="/MrRio/jsPDF/watchers"
            aria-label="396 users are watching this repository">
            396
          </a>

        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content">
            <div class="select-menu-header js-navigation-enable" tabindex="-1">
              <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
              <span class="select-menu-title">Notifications</span>
            </div>

              <div class="select-menu-list js-navigation-container" role="menu">

                <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
                  <div class="select-menu-item-text">
                    <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                    <span class="select-menu-item-heading">Not watching</span>
                    <span class="description">Be notified when participating or @mentioned.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                      Watch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
                  <div class="select-menu-item-text">
                    <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                    <span class="select-menu-item-heading">Watching</span>
                    <span class="description">Be notified of all conversations.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                        Unwatch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
                  <div class="select-menu-item-text">
                    <input id="do_ignore" name="do" type="radio" value="ignore" />
                    <span class="select-menu-item-heading">Ignoring</span>
                    <span class="description">Never be notified.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-mute" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8 2.81v10.38c0 .67-.81 1-1.28.53L3 10H1c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h2l3.72-3.72C7.19 1.81 8 2.14 8 2.81zm7.53 3.22l-1.06-1.06-1.97 1.97-1.97-1.97-1.06 1.06L11.44 8 9.47 9.97l1.06 1.06 1.97-1.97 1.97 1.97 1.06-1.06L13.56 8l1.97-1.97z"/></svg>
                        Stop ignoring
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
</form>
  </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/MrRio/jsPDF/unstar" class="starred js-social-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="2jX8MGfnJj/QWyY7X+YrJlrCkh+NdPnp8b9vbBgB7/MoGKnIm4dg79QBXwZU0hYz19O0qbYLA7yd+5N8fKu7NA==" /></div>
      <input type="hidden" name="context" value="repository"></input>
      <button
        type="submit"
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar MrRio/jsPDF"
        data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/MrRio/jsPDF/stargazers"
           aria-label="10247 users starred this repository">
          10,247
        </a>
</form>
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/MrRio/jsPDF/star" class="unstarred js-social-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="I/rt7Gzg61w7JUR1LqZV87YiaiM8xPojfeC3nY9IDbEY7jHjfVFCMJfhareCdtIN6H0j/qyIo2X6JE2hvd/GIg==" /></div>
      <input type="hidden" name="context" value="repository"></input>
      <button
        type="submit"
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star MrRio/jsPDF"
        data-ga-click="Repository, click star button, action:blob#show; text:Star">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
        Star
      </button>
        <a class="social-count js-social-count" href="/MrRio/jsPDF/stargazers"
           aria-label="10247 users starred this repository">
          10,247
        </a>
</form>  </div>

  </li>

  <li>
          <a href="#fork-destination-box" class="btn btn-sm btn-with-count"
              title="Fork your own copy of MrRio/jsPDF to your account"
              aria-label="Fork your own copy of MrRio/jsPDF to your account"
              rel="facebox"
              data-ga-click="Repository, show fork modal, action:blob#show; text:Fork">
              <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
            Fork
          </a>

          <div id="fork-destination-box" style="display: none;">
            <h2 class="facebox-header" data-facebox-id="facebox-header">Where should we fork this repository?</h2>
            <include-fragment src=""
                class="js-fork-select-fragment fork-select-fragment"
                data-url="/MrRio/jsPDF/fork?fragment=1">
              <img alt="Loading" height="64" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-128.gif" width="64" />
            </include-fragment>
          </div>

    <a href="/MrRio/jsPDF/network" class="social-count"
       aria-label="2310 users forked this repository">
      2,310
    </a>
  </li>
</ul>

      <h1 class="public ">
  <svg aria-hidden="true" class="octicon octicon-repo" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
  <span class="author" itemprop="author"><a href="/MrRio" class="url fn" rel="author">MrRio</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a href="/MrRio/jsPDF" data-pjax="#js-repo-pjax-container">jsPDF</a></strong>

</h1>

    </div>
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax container"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/MrRio/jsPDF" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages /MrRio/jsPDF" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-code" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a href="/MrRio/jsPDF/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /MrRio/jsPDF/issues" itemprop="url">
        <svg aria-hidden="true" class="octicon octicon-issue-opened" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/></svg>
        <span itemprop="name">Issues</span>
        <span class="Counter">242</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/MrRio/jsPDF/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls checks /MrRio/jsPDF/pulls" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-git-pull-request" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
      <span itemprop="name">Pull requests</span>
      <span class="Counter">23</span>
      <meta itemprop="position" content="3">
</a>  </span>

    <a href="/MrRio/jsPDF/projects" class="js-selected-navigation-item reponav-item" data-hotkey="g b" data-selected-links="repo_projects new_repo_project repo_project /MrRio/jsPDF/projects">
      <svg aria-hidden="true" class="octicon octicon-project" height="16" version="1.1" viewBox="0 0 15 16" width="15"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
      Projects
      <span class="Counter" >1</span>
</a>


  <a href="/MrRio/jsPDF/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors dependency_graph pulse /MrRio/jsPDF/pulse">
    <svg aria-hidden="true" class="octicon octicon-graph" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg>
    Insights
</a>

</nav>


  </div>

<div class="container new-discussion-timeline experiment-repo-nav  ">
  <div class="repository-content ">

    
  <a href="/MrRio/jsPDF/blob/9092df51395f4ca1c769532b7bc8950597d23c36/libs/png_support/zlib.js" class="d-none js-permalink-shortcut" data-hotkey="y">Permalink</a>

  <!-- blob contrib key: blob_contributors:v21:3064d81eeec174acabb78ed69710899d -->

  <div class="file-navigation js-zeroclipboard-container">
    
<div class="select-menu branch-select-menu js-menu-container js-select-menu float-left">
  <button class=" btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    
    type="button" aria-label="Switch branches or tags" aria-expanded="false" aria-haspopup="true">
      <i>Branch:</i>
      <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/MrRio/jsPDF/blob/bmp_and_gif_support/libs/png_support/zlib.js"
               data-name="bmp_and_gif_support"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                bmp_and_gif_support
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/MrRio/jsPDF/blob/experimental-blob-support/libs/png_support/zlib.js"
               data-name="experimental-blob-support"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                experimental-blob-support
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/MrRio/jsPDF/blob/extend/addimage/libs/png_support/zlib.js"
               data-name="extend/addimage"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                extend/addimage
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/MrRio/jsPDF/blob/feature-flow/libs/png_support/zlib.js"
               data-name="feature-flow"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                feature-flow
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/MrRio/jsPDF/blob/feature/builder/libs/png_support/zlib.js"
               data-name="feature/builder"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                feature/builder
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/MrRio/jsPDF/blob/feature/custom-fonts/libs/png_support/zlib.js"
               data-name="feature/custom-fonts"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                feature/custom-fonts
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/MrRio/jsPDF/blob/feature/icc_profiles/libs/png_support/zlib.js"
               data-name="feature/icc_profiles"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                feature/icc_profiles
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/MrRio/jsPDF/blob/feature/logo-test/libs/png_support/zlib.js"
               data-name="feature/logo-test"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                feature/logo-test
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/MrRio/jsPDF/blob/feature/securityhandlers/libs/png_support/zlib.js"
               data-name="feature/securityhandlers"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                feature/securityhandlers
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/MrRio/jsPDF/blob/feature/standard-js/libs/png_support/zlib.js"
               data-name="feature/standard-js"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                feature/standard-js
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/MrRio/jsPDF/blob/feature/svg-html/libs/png_support/zlib.js"
               data-name="feature/svg-html"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                feature/svg-html
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/MrRio/jsPDF/blob/greenkeeper/rollup-0.56.3/libs/png_support/zlib.js"
               data-name="greenkeeper/rollup-0.56.3"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                greenkeeper/rollup-0.56.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/MrRio/jsPDF/blob/hotfix_ie_blur/libs/png_support/zlib.js"
               data-name="hotfix_ie_blur"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                hotfix_ie_blur
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/MrRio/jsPDF/blob/ie-shim/libs/png_support/zlib.js"
               data-name="ie-shim"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                ie-shim
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/MrRio/jsPDF/blob/master/libs/png_support/zlib.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                master
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/MrRio/jsPDF/blob/plugin/saveDialog/libs/png_support/zlib.js"
               data-name="plugin/saveDialog"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                plugin/saveDialog
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/MrRio/jsPDF/blob/plugin/templateEngine/libs/png_support/zlib.js"
               data-name="plugin/templateEngine"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                plugin/templateEngine
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/MrRio/jsPDF/tree/v1.3.5/libs/png_support/zlib.js"
              data-name="v1.3.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.3.5">
                v1.3.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/MrRio/jsPDF/tree/v1.3.4/libs/png_support/zlib.js"
              data-name="v1.3.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.3.4">
                v1.3.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/MrRio/jsPDF/tree/v1.3.3/libs/png_support/zlib.js"
              data-name="v1.3.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.3.3">
                v1.3.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/MrRio/jsPDF/tree/v1.3.2/libs/png_support/zlib.js"
              data-name="v1.3.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.3.2">
                v1.3.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/MrRio/jsPDF/tree/v1.3.1/libs/png_support/zlib.js"
              data-name="v1.3.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.3.1">
                v1.3.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/MrRio/jsPDF/tree/v1.3.0/libs/png_support/zlib.js"
              data-name="v1.3.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.3.0">
                v1.3.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/MrRio/jsPDF/tree/v1.2.61/libs/png_support/zlib.js"
              data-name="v1.2.61"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.2.61">
                v1.2.61
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/MrRio/jsPDF/tree/v1.2.60/libs/png_support/zlib.js"
              data-name="v1.2.60"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.2.60">
                v1.2.60
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/MrRio/jsPDF/tree/v1.0.272/libs/png_support/zlib.js"
              data-name="v1.0.272"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.272">
                v1.0.272
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/MrRio/jsPDF/tree/v1.0.178/libs/png_support/zlib.js"
              data-name="v1.0.178"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.178">
                v1.0.178
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/MrRio/jsPDF/tree/v1.0.150/libs/png_support/zlib.js"
              data-name="v1.0.150"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.150">
                v1.0.150
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/MrRio/jsPDF/tree/v1.0.138/libs/png_support/zlib.js"
              data-name="v1.0.138"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.138">
                v1.0.138
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/MrRio/jsPDF/tree/v1.0.119/libs/png_support/zlib.js"
              data-name="v1.0.119"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.119">
                v1.0.119
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/MrRio/jsPDF/tree/v1.0.116/libs/png_support/zlib.js"
              data-name="v1.0.116"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.116">
                v1.0.116
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/MrRio/jsPDF/tree/v1.0.115/libs/png_support/zlib.js"
              data-name="v1.0.115"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.115">
                v1.0.115
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/MrRio/jsPDF/tree/v1.0.106/libs/png_support/zlib.js"
              data-name="v1.0.106"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.106">
                v1.0.106
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/MrRio/jsPDF/tree/v0.9.0/libs/png_support/zlib.js"
              data-name="v0.9.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.9.0">
                v0.9.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/MrRio/jsPDF/tree/1.3.4/libs/png_support/zlib.js"
              data-name="1.3.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.3.4">
                1.3.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/MrRio/jsPDF/tree/1.1.135/libs/png_support/zlib.js"
              data-name="1.1.135"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.1.135">
                1.1.135
              </span>
            </a>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

    <div class="BtnGroup float-right">
      <a href="/MrRio/jsPDF/find/master"
            class="js-pjax-capture-input btn btn-sm BtnGroup-item"
            data-pjax
            data-hotkey="t">
        Find file
      </a>
      <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm BtnGroup-item tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
    </div>
    <div class="breadcrumb js-zeroclipboard-target">
      <span class="repo-root js-repo-root"><span class="js-path-segment"><a href="/MrRio/jsPDF" data-pjax="true"><span>jsPDF</span></a></span></span><span class="separator">/</span><span class="js-path-segment"><a href="/MrRio/jsPDF/tree/master/libs" data-pjax="true"><span>libs</span></a></span><span class="separator">/</span><span class="js-path-segment"><a href="/MrRio/jsPDF/tree/master/libs/png_support" data-pjax="true"><span>png_support</span></a></span><span class="separator">/</span><strong class="final-path">zlib.js</strong>
    </div>
  </div>


  
  <div class="commit-tease">
      <span class="float-right">
        <a class="commit-tease-sha" href="/MrRio/jsPDF/commit/4c6949394c1ffaf86d448e5e962f315559deb000" data-pjax>
          4c69493
        </a>
        <relative-time datetime="2014-04-29T03:49:00Z">Apr 29, 2014</relative-time>
      </span>
      <div>
        <img alt="@diegocr" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/734313?s=40&amp;v=4" width="20" />
        <a href="/diegocr" class="user-mention" rel="contributor">diegocr</a>
          <a href="/MrRio/jsPDF/commit/4c6949394c1ffaf86d448e5e962f315559deb000" class="message" data-pjax="true" title="Ensuring the PNG support dont break the library initialization under older browsers">Ensuring the PNG support dont break the library initialization under …</a>
      </div>

    <div class="commit-tease-contributors">
      <button type="button" class="btn-link muted-link contributors-toggle" data-facebox="#blob_contributors_box">
        <strong>2</strong>
         contributors
      </button>
          <a class="avatar-link tooltipped tooltipped-s" aria-label="jamesbrobb" href="/MrRio/jsPDF/commits/master/libs/png_support/zlib.js?author=jamesbrobb"><img alt="@jamesbrobb" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/1752245?s=40&amp;v=4" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="diegocr" href="/MrRio/jsPDF/commits/master/libs/png_support/zlib.js?author=diegocr"><img alt="@diegocr" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/734313?s=40&amp;v=4" width="20" /> </a>


    </div>

    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header" data-facebox-id="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list" data-facebox-id="facebox-description">
          <li class="facebox-user-list-item">
            <img alt="@jamesbrobb" height="24" src="https://avatars1.githubusercontent.com/u/1752245?s=48&amp;v=4" width="24" />
            <a href="/jamesbrobb">jamesbrobb</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@diegocr" height="24" src="https://avatars2.githubusercontent.com/u/734313?s=48&amp;v=4" width="24" />
            <a href="/diegocr">diegocr</a>
          </li>
      </ul>
    </div>
  </div>


  <div class="file">
    <div class="file-header">
  <div class="file-actions">

    <div class="BtnGroup">
      <a href="/MrRio/jsPDF/raw/master/libs/png_support/zlib.js" class="btn btn-sm BtnGroup-item" id="raw-url">Raw</a>
        <a href="/MrRio/jsPDF/blame/master/libs/png_support/zlib.js" class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b">Blame</a>
      <a href="/MrRio/jsPDF/commits/master/libs/png_support/zlib.js" class="btn btn-sm BtnGroup-item" rel="nofollow">History</a>
    </div>

        <a class="btn-octicon tooltipped tooltipped-nw"
           href="x-github-client://openRepo/https://github.com/MrRio/jsPDF?branch=master&amp;filepath=libs%2Fpng_support%2Fzlib.js"
           aria-label="Open this file in GitHub Desktop"
           data-ga-click="Repository, open with desktop, type:windows">
            <svg aria-hidden="true" class="octicon octicon-device-desktop" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"/></svg>
        </a>

          <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/MrRio/jsPDF/edit/master/libs/png_support/zlib.js" class="inline-form js-update-url-with-hash" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="QxLKN0qQ10B03nhvzX57rUW9fFSFv8sVr8IUMtVwsuTDDfKa55vO+C2XluOscowGPGUzruEfB273rhZyadOz8A==" /></div>
            <button class="btn-octicon tooltipped tooltipped-nw" type="submit"
              aria-label="Fork this project and edit the file" data-hotkey="e" data-disable-with>
              <svg aria-hidden="true" class="octicon octicon-pencil" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
            </button>
</form>
        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/MrRio/jsPDF/delete/master/libs/png_support/zlib.js" class="inline-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="FpFK1mcpbyGjYy9PEY/SvISYkLOLiiyd6gLRrb3Q6f0iQapXhvYthA3rvEBxBbvRczu8d6r6I+v7bdlemYaqZg==" /></div>
          <button class="btn-octicon btn-octicon-danger tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and delete the file" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-trashcan" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
          </button>
</form>  </div>

  <div class="file-info">
      <span class="file-mode" title="File mode">executable file</span>
      <span class="file-info-divider"></span>
      467 lines (425 sloc)
      <span class="file-info-divider"></span>
    16.8 KB
  </div>
</div>

    

  <div itemprop="text" class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">/*</span></span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Extracted from pdf.js</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * https://github.com/andreasgal/pdf.js</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Copyright (c) 2011 Mozilla Foundation</span></td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Contributors: Andreas Gal &lt;gal@mozilla.com&gt;</span></td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *               Chris G Jones &lt;cjones@mozilla.com&gt;</span></td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *               Shaon Barman &lt;shaon.barman@gmail.com&gt;</span></td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *               Vivien Nicolas &lt;21@vingtetun.org&gt;</span></td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *               Justin D&#39;Arcangelo &lt;justindarc@gmail.com&gt;</span></td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *               Yury Delendik</span></td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Permission is hereby granted, free of charge, to any person obtaining a</span></td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * copy of this software and associated documentation files (the &quot;Software&quot;),</span></td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * to deal in the Software without restriction, including without limitation</span></td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * the rights to use, copy, modify, merge, publish, distribute, sublicense,</span></td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * and/or sell copies of the Software, and to permit persons to whom the</span></td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Software is furnished to do so, subject to the following conditions:</span></td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * The above copyright notice and this permission notice shall be included in</span></td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * all copies or substantial portions of the Software.</span></td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR</span></td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,</span></td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL</span></td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER</span></td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING</span></td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER</span></td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * DEALINGS IN THE SOFTWARE.</span></td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> DecodeStream <span class="pl-k">=</span> (<span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">function</span> <span class="pl-en">constructor</span>() {</td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-smi">pos</span> <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-smi">bufferLength</span> <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-smi">eof</span> <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-smi">buffer</span> <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">constructor</span>.prototype = {</td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code blob-code-inner js-file-line">    ensureBuffer: <span class="pl-k">function</span> <span class="pl-en">decodestream_ensureBuffer</span>(<span class="pl-smi">requested</span>) {</td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> buffer <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">buffer</span>;</td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> current <span class="pl-k">=</span> buffer <span class="pl-k">?</span> <span class="pl-smi">buffer</span>.<span class="pl-smi">byteLength</span> <span class="pl-k">:</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (requested <span class="pl-k">&lt;</span> current)</td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> buffer;</td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> size <span class="pl-k">=</span> <span class="pl-c1">512</span>;</td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">while</span> (size <span class="pl-k">&lt;</span> requested)</td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code blob-code-inner js-file-line">        size <span class="pl-k">&lt;&lt;=</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> buffer2 <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Uint8Array</span>(size);</td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> current; <span class="pl-k">++</span>i)</td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code blob-code-inner js-file-line">        buffer2[i] <span class="pl-k">=</span> buffer[i];</td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-smi">buffer</span> <span class="pl-k">=</span> buffer2;</td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">getByte</span><span class="pl-k">:</span> <span class="pl-k">function</span> <span class="pl-en">decodestream_getByte</span>() {</td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> pos <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">pos</span>;</td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">while</span> (<span class="pl-c1">this</span>.<span class="pl-smi">bufferLength</span> <span class="pl-k">&lt;=</span> pos) {</td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-c1">this</span>.<span class="pl-smi">eof</span>)</td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">return</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-en">readBlock</span>();</td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-smi">buffer</span>[<span class="pl-c1">this</span>.<span class="pl-smi">pos</span><span class="pl-k">++</span>];</td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">getBytes</span><span class="pl-k">:</span> <span class="pl-k">function</span> <span class="pl-en">decodestream_getBytes</span>(<span class="pl-smi">length</span>) {</td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> pos <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">pos</span>;</td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (length) {</td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-en">ensureBuffer</span>(pos <span class="pl-k">+</span> length);</td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> end <span class="pl-k">=</span> pos <span class="pl-k">+</span> length;</td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">while</span> (<span class="pl-k">!</span><span class="pl-c1">this</span>.<span class="pl-smi">eof</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-c1">this</span>.<span class="pl-smi">bufferLength</span> <span class="pl-k">&lt;</span> end)</td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">this</span>.<span class="pl-en">readBlock</span>();</td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> bufEnd <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">bufferLength</span>;</td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (end <span class="pl-k">&gt;</span> bufEnd)</td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code blob-code-inner js-file-line">          end <span class="pl-k">=</span> bufEnd;</td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code blob-code-inner js-file-line">      } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">while</span> (<span class="pl-k">!</span><span class="pl-c1">this</span>.<span class="pl-smi">eof</span>)</td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">this</span>.<span class="pl-en">readBlock</span>();</td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> end <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">bufferLength</span>;</td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">this</span>.<span class="pl-smi">pos</span> <span class="pl-k">=</span> end;</td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-smi">buffer</span>.<span class="pl-en">subarray</span>(pos, end);</td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">lookChar</span><span class="pl-k">:</span> <span class="pl-k">function</span> <span class="pl-en">decodestream_lookChar</span>() {</td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> pos <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">pos</span>;</td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">while</span> (<span class="pl-c1">this</span>.<span class="pl-smi">bufferLength</span> <span class="pl-k">&lt;=</span> pos) {</td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-c1">this</span>.<span class="pl-smi">eof</span>)</td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">return</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-en">readBlock</span>();</td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> <span class="pl-c1">String</span>.<span class="pl-c1">fromCharCode</span>(<span class="pl-c1">this</span>.<span class="pl-smi">buffer</span>[<span class="pl-c1">this</span>.<span class="pl-smi">pos</span>]);</td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">getChar</span><span class="pl-k">:</span> <span class="pl-k">function</span> <span class="pl-en">decodestream_getChar</span>() {</td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> pos <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">pos</span>;</td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">while</span> (<span class="pl-c1">this</span>.<span class="pl-smi">bufferLength</span> <span class="pl-k">&lt;=</span> pos) {</td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-c1">this</span>.<span class="pl-smi">eof</span>)</td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">return</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-en">readBlock</span>();</td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> <span class="pl-c1">String</span>.<span class="pl-c1">fromCharCode</span>(<span class="pl-c1">this</span>.<span class="pl-smi">buffer</span>[<span class="pl-c1">this</span>.<span class="pl-smi">pos</span><span class="pl-k">++</span>]);</td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">makeSubStream</span><span class="pl-k">:</span> <span class="pl-k">function</span> <span class="pl-en">decodestream_makeSubstream</span>(<span class="pl-smi">start</span>, <span class="pl-smi">length</span>, <span class="pl-smi">dict</span>) {</td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> end <span class="pl-k">=</span> start <span class="pl-k">+</span> length;</td>
      </tr>
      <tr>
        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">while</span> (<span class="pl-c1">this</span>.<span class="pl-smi">bufferLength</span> <span class="pl-k">&lt;=</span> end <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span><span class="pl-c1">this</span>.<span class="pl-smi">eof</span>)</td>
      </tr>
      <tr>
        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-en">readBlock</span>();</td>
      </tr>
      <tr>
        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> <span class="pl-k">new</span> <span class="pl-en">Stream</span>(<span class="pl-c1">this</span>.<span class="pl-smi">buffer</span>, start, length, dict);</td>
      </tr>
      <tr>
        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">skip</span><span class="pl-k">:</span> <span class="pl-k">function</span> <span class="pl-en">decodestream_skip</span>(<span class="pl-smi">n</span>) {</td>
      </tr>
      <tr>
        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-k">!</span>n)</td>
      </tr>
      <tr>
        <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-code blob-code-inner js-file-line">        n <span class="pl-k">=</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">this</span>.<span class="pl-smi">pos</span> <span class="pl-k">+=</span> n;</td>
      </tr>
      <tr>
        <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">reset</span><span class="pl-k">:</span> <span class="pl-k">function</span> <span class="pl-en">decodestream_reset</span>() {</td>
      </tr>
      <tr>
        <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">this</span>.<span class="pl-smi">pos</span> <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">return</span> <span class="pl-en">constructor</span>;</td>
      </tr>
      <tr>
        <td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-code blob-code-inner js-file-line">})();</td>
      </tr>
      <tr>
        <td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L124" class="blob-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-code blob-code-inner js-file-line">var FlateStream = (function() {</td>
      </tr>
      <tr>
        <td id="L125" class="blob-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (<span class="pl-k">typeof</span> <span class="pl-c1">Uint32Array</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L126" class="blob-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-c1">undefined</span>;</td>
      </tr>
      <tr>
        <td id="L127" class="blob-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L128" class="blob-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> codeLenCodeMap <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Uint32Array</span>([</td>
      </tr>
      <tr>
        <td id="L129" class="blob-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">16</span>, <span class="pl-c1">17</span>, <span class="pl-c1">18</span>, <span class="pl-c1">0</span>, <span class="pl-c1">8</span>, <span class="pl-c1">7</span>, <span class="pl-c1">9</span>, <span class="pl-c1">6</span>, <span class="pl-c1">10</span>, <span class="pl-c1">5</span>, <span class="pl-c1">11</span>, <span class="pl-c1">4</span>, <span class="pl-c1">12</span>, <span class="pl-c1">3</span>, <span class="pl-c1">13</span>, <span class="pl-c1">2</span>, <span class="pl-c1">14</span>, <span class="pl-c1">1</span>, <span class="pl-c1">15</span></td>
      </tr>
      <tr>
        <td id="L130" class="blob-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-code blob-code-inner js-file-line">  ]);</td>
      </tr>
      <tr>
        <td id="L131" class="blob-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L132" class="blob-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> lengthDecode <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Uint32Array</span>([</td>
      </tr>
      <tr>
        <td id="L133" class="blob-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x00003</span>, <span class="pl-c1">0x00004</span>, <span class="pl-c1">0x00005</span>, <span class="pl-c1">0x00006</span>, <span class="pl-c1">0x00007</span>, <span class="pl-c1">0x00008</span>, <span class="pl-c1">0x00009</span>, <span class="pl-c1">0x0000a</span>,</td>
      </tr>
      <tr>
        <td id="L134" class="blob-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x1000b</span>, <span class="pl-c1">0x1000d</span>, <span class="pl-c1">0x1000f</span>, <span class="pl-c1">0x10011</span>, <span class="pl-c1">0x20013</span>, <span class="pl-c1">0x20017</span>, <span class="pl-c1">0x2001b</span>, <span class="pl-c1">0x2001f</span>,</td>
      </tr>
      <tr>
        <td id="L135" class="blob-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x30023</span>, <span class="pl-c1">0x3002b</span>, <span class="pl-c1">0x30033</span>, <span class="pl-c1">0x3003b</span>, <span class="pl-c1">0x40043</span>, <span class="pl-c1">0x40053</span>, <span class="pl-c1">0x40063</span>, <span class="pl-c1">0x40073</span>,</td>
      </tr>
      <tr>
        <td id="L136" class="blob-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x50083</span>, <span class="pl-c1">0x500a3</span>, <span class="pl-c1">0x500c3</span>, <span class="pl-c1">0x500e3</span>, <span class="pl-c1">0x00102</span>, <span class="pl-c1">0x00102</span>, <span class="pl-c1">0x00102</span></td>
      </tr>
      <tr>
        <td id="L137" class="blob-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-code blob-code-inner js-file-line">  ]);</td>
      </tr>
      <tr>
        <td id="L138" class="blob-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L139" class="blob-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> distDecode <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Uint32Array</span>([</td>
      </tr>
      <tr>
        <td id="L140" class="blob-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x00001</span>, <span class="pl-c1">0x00002</span>, <span class="pl-c1">0x00003</span>, <span class="pl-c1">0x00004</span>, <span class="pl-c1">0x10005</span>, <span class="pl-c1">0x10007</span>, <span class="pl-c1">0x20009</span>, <span class="pl-c1">0x2000d</span>,</td>
      </tr>
      <tr>
        <td id="L141" class="blob-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x30011</span>, <span class="pl-c1">0x30019</span>, <span class="pl-c1">0x40021</span>, <span class="pl-c1">0x40031</span>, <span class="pl-c1">0x50041</span>, <span class="pl-c1">0x50061</span>, <span class="pl-c1">0x60081</span>, <span class="pl-c1">0x600c1</span>,</td>
      </tr>
      <tr>
        <td id="L142" class="blob-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x70101</span>, <span class="pl-c1">0x70181</span>, <span class="pl-c1">0x80201</span>, <span class="pl-c1">0x80301</span>, <span class="pl-c1">0x90401</span>, <span class="pl-c1">0x90601</span>, <span class="pl-c1">0xa0801</span>, <span class="pl-c1">0xa0c01</span>,</td>
      </tr>
      <tr>
        <td id="L143" class="blob-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0xb1001</span>, <span class="pl-c1">0xb1801</span>, <span class="pl-c1">0xc2001</span>, <span class="pl-c1">0xc3001</span>, <span class="pl-c1">0xd4001</span>, <span class="pl-c1">0xd6001</span></td>
      </tr>
      <tr>
        <td id="L144" class="blob-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-code blob-code-inner js-file-line">  ]);</td>
      </tr>
      <tr>
        <td id="L145" class="blob-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L146" class="blob-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> fixedLitCodeTab <span class="pl-k">=</span> [<span class="pl-k">new</span> <span class="pl-en">Uint32Array</span>([</td>
      </tr>
      <tr>
        <td id="L147" class="blob-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x70100</span>, <span class="pl-c1">0x80050</span>, <span class="pl-c1">0x80010</span>, <span class="pl-c1">0x80118</span>, <span class="pl-c1">0x70110</span>, <span class="pl-c1">0x80070</span>, <span class="pl-c1">0x80030</span>, <span class="pl-c1">0x900c0</span>,</td>
      </tr>
      <tr>
        <td id="L148" class="blob-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x70108</span>, <span class="pl-c1">0x80060</span>, <span class="pl-c1">0x80020</span>, <span class="pl-c1">0x900a0</span>, <span class="pl-c1">0x80000</span>, <span class="pl-c1">0x80080</span>, <span class="pl-c1">0x80040</span>, <span class="pl-c1">0x900e0</span>,</td>
      </tr>
      <tr>
        <td id="L149" class="blob-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x70104</span>, <span class="pl-c1">0x80058</span>, <span class="pl-c1">0x80018</span>, <span class="pl-c1">0x90090</span>, <span class="pl-c1">0x70114</span>, <span class="pl-c1">0x80078</span>, <span class="pl-c1">0x80038</span>, <span class="pl-c1">0x900d0</span>,</td>
      </tr>
      <tr>
        <td id="L150" class="blob-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x7010c</span>, <span class="pl-c1">0x80068</span>, <span class="pl-c1">0x80028</span>, <span class="pl-c1">0x900b0</span>, <span class="pl-c1">0x80008</span>, <span class="pl-c1">0x80088</span>, <span class="pl-c1">0x80048</span>, <span class="pl-c1">0x900f0</span>,</td>
      </tr>
      <tr>
        <td id="L151" class="blob-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x70102</span>, <span class="pl-c1">0x80054</span>, <span class="pl-c1">0x80014</span>, <span class="pl-c1">0x8011c</span>, <span class="pl-c1">0x70112</span>, <span class="pl-c1">0x80074</span>, <span class="pl-c1">0x80034</span>, <span class="pl-c1">0x900c8</span>,</td>
      </tr>
      <tr>
        <td id="L152" class="blob-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x7010a</span>, <span class="pl-c1">0x80064</span>, <span class="pl-c1">0x80024</span>, <span class="pl-c1">0x900a8</span>, <span class="pl-c1">0x80004</span>, <span class="pl-c1">0x80084</span>, <span class="pl-c1">0x80044</span>, <span class="pl-c1">0x900e8</span>,</td>
      </tr>
      <tr>
        <td id="L153" class="blob-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x70106</span>, <span class="pl-c1">0x8005c</span>, <span class="pl-c1">0x8001c</span>, <span class="pl-c1">0x90098</span>, <span class="pl-c1">0x70116</span>, <span class="pl-c1">0x8007c</span>, <span class="pl-c1">0x8003c</span>, <span class="pl-c1">0x900d8</span>,</td>
      </tr>
      <tr>
        <td id="L154" class="blob-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x7010e</span>, <span class="pl-c1">0x8006c</span>, <span class="pl-c1">0x8002c</span>, <span class="pl-c1">0x900b8</span>, <span class="pl-c1">0x8000c</span>, <span class="pl-c1">0x8008c</span>, <span class="pl-c1">0x8004c</span>, <span class="pl-c1">0x900f8</span>,</td>
      </tr>
      <tr>
        <td id="L155" class="blob-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x70101</span>, <span class="pl-c1">0x80052</span>, <span class="pl-c1">0x80012</span>, <span class="pl-c1">0x8011a</span>, <span class="pl-c1">0x70111</span>, <span class="pl-c1">0x80072</span>, <span class="pl-c1">0x80032</span>, <span class="pl-c1">0x900c4</span>,</td>
      </tr>
      <tr>
        <td id="L156" class="blob-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x70109</span>, <span class="pl-c1">0x80062</span>, <span class="pl-c1">0x80022</span>, <span class="pl-c1">0x900a4</span>, <span class="pl-c1">0x80002</span>, <span class="pl-c1">0x80082</span>, <span class="pl-c1">0x80042</span>, <span class="pl-c1">0x900e4</span>,</td>
      </tr>
      <tr>
        <td id="L157" class="blob-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x70105</span>, <span class="pl-c1">0x8005a</span>, <span class="pl-c1">0x8001a</span>, <span class="pl-c1">0x90094</span>, <span class="pl-c1">0x70115</span>, <span class="pl-c1">0x8007a</span>, <span class="pl-c1">0x8003a</span>, <span class="pl-c1">0x900d4</span>,</td>
      </tr>
      <tr>
        <td id="L158" class="blob-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x7010d</span>, <span class="pl-c1">0x8006a</span>, <span class="pl-c1">0x8002a</span>, <span class="pl-c1">0x900b4</span>, <span class="pl-c1">0x8000a</span>, <span class="pl-c1">0x8008a</span>, <span class="pl-c1">0x8004a</span>, <span class="pl-c1">0x900f4</span>,</td>
      </tr>
      <tr>
        <td id="L159" class="blob-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x70103</span>, <span class="pl-c1">0x80056</span>, <span class="pl-c1">0x80016</span>, <span class="pl-c1">0x8011e</span>, <span class="pl-c1">0x70113</span>, <span class="pl-c1">0x80076</span>, <span class="pl-c1">0x80036</span>, <span class="pl-c1">0x900cc</span>,</td>
      </tr>
      <tr>
        <td id="L160" class="blob-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x7010b</span>, <span class="pl-c1">0x80066</span>, <span class="pl-c1">0x80026</span>, <span class="pl-c1">0x900ac</span>, <span class="pl-c1">0x80006</span>, <span class="pl-c1">0x80086</span>, <span class="pl-c1">0x80046</span>, <span class="pl-c1">0x900ec</span>,</td>
      </tr>
      <tr>
        <td id="L161" class="blob-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x70107</span>, <span class="pl-c1">0x8005e</span>, <span class="pl-c1">0x8001e</span>, <span class="pl-c1">0x9009c</span>, <span class="pl-c1">0x70117</span>, <span class="pl-c1">0x8007e</span>, <span class="pl-c1">0x8003e</span>, <span class="pl-c1">0x900dc</span>,</td>
      </tr>
      <tr>
        <td id="L162" class="blob-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x7010f</span>, <span class="pl-c1">0x8006e</span>, <span class="pl-c1">0x8002e</span>, <span class="pl-c1">0x900bc</span>, <span class="pl-c1">0x8000e</span>, <span class="pl-c1">0x8008e</span>, <span class="pl-c1">0x8004e</span>, <span class="pl-c1">0x900fc</span>,</td>
      </tr>
      <tr>
        <td id="L163" class="blob-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x70100</span>, <span class="pl-c1">0x80051</span>, <span class="pl-c1">0x80011</span>, <span class="pl-c1">0x80119</span>, <span class="pl-c1">0x70110</span>, <span class="pl-c1">0x80071</span>, <span class="pl-c1">0x80031</span>, <span class="pl-c1">0x900c2</span>,</td>
      </tr>
      <tr>
        <td id="L164" class="blob-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x70108</span>, <span class="pl-c1">0x80061</span>, <span class="pl-c1">0x80021</span>, <span class="pl-c1">0x900a2</span>, <span class="pl-c1">0x80001</span>, <span class="pl-c1">0x80081</span>, <span class="pl-c1">0x80041</span>, <span class="pl-c1">0x900e2</span>,</td>
      </tr>
      <tr>
        <td id="L165" class="blob-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x70104</span>, <span class="pl-c1">0x80059</span>, <span class="pl-c1">0x80019</span>, <span class="pl-c1">0x90092</span>, <span class="pl-c1">0x70114</span>, <span class="pl-c1">0x80079</span>, <span class="pl-c1">0x80039</span>, <span class="pl-c1">0x900d2</span>,</td>
      </tr>
      <tr>
        <td id="L166" class="blob-num js-line-number" data-line-number="166"></td>
        <td id="LC166" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x7010c</span>, <span class="pl-c1">0x80069</span>, <span class="pl-c1">0x80029</span>, <span class="pl-c1">0x900b2</span>, <span class="pl-c1">0x80009</span>, <span class="pl-c1">0x80089</span>, <span class="pl-c1">0x80049</span>, <span class="pl-c1">0x900f2</span>,</td>
      </tr>
      <tr>
        <td id="L167" class="blob-num js-line-number" data-line-number="167"></td>
        <td id="LC167" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x70102</span>, <span class="pl-c1">0x80055</span>, <span class="pl-c1">0x80015</span>, <span class="pl-c1">0x8011d</span>, <span class="pl-c1">0x70112</span>, <span class="pl-c1">0x80075</span>, <span class="pl-c1">0x80035</span>, <span class="pl-c1">0x900ca</span>,</td>
      </tr>
      <tr>
        <td id="L168" class="blob-num js-line-number" data-line-number="168"></td>
        <td id="LC168" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x7010a</span>, <span class="pl-c1">0x80065</span>, <span class="pl-c1">0x80025</span>, <span class="pl-c1">0x900aa</span>, <span class="pl-c1">0x80005</span>, <span class="pl-c1">0x80085</span>, <span class="pl-c1">0x80045</span>, <span class="pl-c1">0x900ea</span>,</td>
      </tr>
      <tr>
        <td id="L169" class="blob-num js-line-number" data-line-number="169"></td>
        <td id="LC169" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x70106</span>, <span class="pl-c1">0x8005d</span>, <span class="pl-c1">0x8001d</span>, <span class="pl-c1">0x9009a</span>, <span class="pl-c1">0x70116</span>, <span class="pl-c1">0x8007d</span>, <span class="pl-c1">0x8003d</span>, <span class="pl-c1">0x900da</span>,</td>
      </tr>
      <tr>
        <td id="L170" class="blob-num js-line-number" data-line-number="170"></td>
        <td id="LC170" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x7010e</span>, <span class="pl-c1">0x8006d</span>, <span class="pl-c1">0x8002d</span>, <span class="pl-c1">0x900ba</span>, <span class="pl-c1">0x8000d</span>, <span class="pl-c1">0x8008d</span>, <span class="pl-c1">0x8004d</span>, <span class="pl-c1">0x900fa</span>,</td>
      </tr>
      <tr>
        <td id="L171" class="blob-num js-line-number" data-line-number="171"></td>
        <td id="LC171" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x70101</span>, <span class="pl-c1">0x80053</span>, <span class="pl-c1">0x80013</span>, <span class="pl-c1">0x8011b</span>, <span class="pl-c1">0x70111</span>, <span class="pl-c1">0x80073</span>, <span class="pl-c1">0x80033</span>, <span class="pl-c1">0x900c6</span>,</td>
      </tr>
      <tr>
        <td id="L172" class="blob-num js-line-number" data-line-number="172"></td>
        <td id="LC172" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x70109</span>, <span class="pl-c1">0x80063</span>, <span class="pl-c1">0x80023</span>, <span class="pl-c1">0x900a6</span>, <span class="pl-c1">0x80003</span>, <span class="pl-c1">0x80083</span>, <span class="pl-c1">0x80043</span>, <span class="pl-c1">0x900e6</span>,</td>
      </tr>
      <tr>
        <td id="L173" class="blob-num js-line-number" data-line-number="173"></td>
        <td id="LC173" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x70105</span>, <span class="pl-c1">0x8005b</span>, <span class="pl-c1">0x8001b</span>, <span class="pl-c1">0x90096</span>, <span class="pl-c1">0x70115</span>, <span class="pl-c1">0x8007b</span>, <span class="pl-c1">0x8003b</span>, <span class="pl-c1">0x900d6</span>,</td>
      </tr>
      <tr>
        <td id="L174" class="blob-num js-line-number" data-line-number="174"></td>
        <td id="LC174" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x7010d</span>, <span class="pl-c1">0x8006b</span>, <span class="pl-c1">0x8002b</span>, <span class="pl-c1">0x900b6</span>, <span class="pl-c1">0x8000b</span>, <span class="pl-c1">0x8008b</span>, <span class="pl-c1">0x8004b</span>, <span class="pl-c1">0x900f6</span>,</td>
      </tr>
      <tr>
        <td id="L175" class="blob-num js-line-number" data-line-number="175"></td>
        <td id="LC175" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x70103</span>, <span class="pl-c1">0x80057</span>, <span class="pl-c1">0x80017</span>, <span class="pl-c1">0x8011f</span>, <span class="pl-c1">0x70113</span>, <span class="pl-c1">0x80077</span>, <span class="pl-c1">0x80037</span>, <span class="pl-c1">0x900ce</span>,</td>
      </tr>
      <tr>
        <td id="L176" class="blob-num js-line-number" data-line-number="176"></td>
        <td id="LC176" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x7010b</span>, <span class="pl-c1">0x80067</span>, <span class="pl-c1">0x80027</span>, <span class="pl-c1">0x900ae</span>, <span class="pl-c1">0x80007</span>, <span class="pl-c1">0x80087</span>, <span class="pl-c1">0x80047</span>, <span class="pl-c1">0x900ee</span>,</td>
      </tr>
      <tr>
        <td id="L177" class="blob-num js-line-number" data-line-number="177"></td>
        <td id="LC177" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x70107</span>, <span class="pl-c1">0x8005f</span>, <span class="pl-c1">0x8001f</span>, <span class="pl-c1">0x9009e</span>, <span class="pl-c1">0x70117</span>, <span class="pl-c1">0x8007f</span>, <span class="pl-c1">0x8003f</span>, <span class="pl-c1">0x900de</span>,</td>
      </tr>
      <tr>
        <td id="L178" class="blob-num js-line-number" data-line-number="178"></td>
        <td id="LC178" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x7010f</span>, <span class="pl-c1">0x8006f</span>, <span class="pl-c1">0x8002f</span>, <span class="pl-c1">0x900be</span>, <span class="pl-c1">0x8000f</span>, <span class="pl-c1">0x8008f</span>, <span class="pl-c1">0x8004f</span>, <span class="pl-c1">0x900fe</span>,</td>
      </tr>
      <tr>
        <td id="L179" class="blob-num js-line-number" data-line-number="179"></td>
        <td id="LC179" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x70100</span>, <span class="pl-c1">0x80050</span>, <span class="pl-c1">0x80010</span>, <span class="pl-c1">0x80118</span>, <span class="pl-c1">0x70110</span>, <span class="pl-c1">0x80070</span>, <span class="pl-c1">0x80030</span>, <span class="pl-c1">0x900c1</span>,</td>
      </tr>
      <tr>
        <td id="L180" class="blob-num js-line-number" data-line-number="180"></td>
        <td id="LC180" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x70108</span>, <span class="pl-c1">0x80060</span>, <span class="pl-c1">0x80020</span>, <span class="pl-c1">0x900a1</span>, <span class="pl-c1">0x80000</span>, <span class="pl-c1">0x80080</span>, <span class="pl-c1">0x80040</span>, <span class="pl-c1">0x900e1</span>,</td>
      </tr>
      <tr>
        <td id="L181" class="blob-num js-line-number" data-line-number="181"></td>
        <td id="LC181" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x70104</span>, <span class="pl-c1">0x80058</span>, <span class="pl-c1">0x80018</span>, <span class="pl-c1">0x90091</span>, <span class="pl-c1">0x70114</span>, <span class="pl-c1">0x80078</span>, <span class="pl-c1">0x80038</span>, <span class="pl-c1">0x900d1</span>,</td>
      </tr>
      <tr>
        <td id="L182" class="blob-num js-line-number" data-line-number="182"></td>
        <td id="LC182" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x7010c</span>, <span class="pl-c1">0x80068</span>, <span class="pl-c1">0x80028</span>, <span class="pl-c1">0x900b1</span>, <span class="pl-c1">0x80008</span>, <span class="pl-c1">0x80088</span>, <span class="pl-c1">0x80048</span>, <span class="pl-c1">0x900f1</span>,</td>
      </tr>
      <tr>
        <td id="L183" class="blob-num js-line-number" data-line-number="183"></td>
        <td id="LC183" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x70102</span>, <span class="pl-c1">0x80054</span>, <span class="pl-c1">0x80014</span>, <span class="pl-c1">0x8011c</span>, <span class="pl-c1">0x70112</span>, <span class="pl-c1">0x80074</span>, <span class="pl-c1">0x80034</span>, <span class="pl-c1">0x900c9</span>,</td>
      </tr>
      <tr>
        <td id="L184" class="blob-num js-line-number" data-line-number="184"></td>
        <td id="LC184" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x7010a</span>, <span class="pl-c1">0x80064</span>, <span class="pl-c1">0x80024</span>, <span class="pl-c1">0x900a9</span>, <span class="pl-c1">0x80004</span>, <span class="pl-c1">0x80084</span>, <span class="pl-c1">0x80044</span>, <span class="pl-c1">0x900e9</span>,</td>
      </tr>
      <tr>
        <td id="L185" class="blob-num js-line-number" data-line-number="185"></td>
        <td id="LC185" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x70106</span>, <span class="pl-c1">0x8005c</span>, <span class="pl-c1">0x8001c</span>, <span class="pl-c1">0x90099</span>, <span class="pl-c1">0x70116</span>, <span class="pl-c1">0x8007c</span>, <span class="pl-c1">0x8003c</span>, <span class="pl-c1">0x900d9</span>,</td>
      </tr>
      <tr>
        <td id="L186" class="blob-num js-line-number" data-line-number="186"></td>
        <td id="LC186" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x7010e</span>, <span class="pl-c1">0x8006c</span>, <span class="pl-c1">0x8002c</span>, <span class="pl-c1">0x900b9</span>, <span class="pl-c1">0x8000c</span>, <span class="pl-c1">0x8008c</span>, <span class="pl-c1">0x8004c</span>, <span class="pl-c1">0x900f9</span>,</td>
      </tr>
      <tr>
        <td id="L187" class="blob-num js-line-number" data-line-number="187"></td>
        <td id="LC187" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x70101</span>, <span class="pl-c1">0x80052</span>, <span class="pl-c1">0x80012</span>, <span class="pl-c1">0x8011a</span>, <span class="pl-c1">0x70111</span>, <span class="pl-c1">0x80072</span>, <span class="pl-c1">0x80032</span>, <span class="pl-c1">0x900c5</span>,</td>
      </tr>
      <tr>
        <td id="L188" class="blob-num js-line-number" data-line-number="188"></td>
        <td id="LC188" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x70109</span>, <span class="pl-c1">0x80062</span>, <span class="pl-c1">0x80022</span>, <span class="pl-c1">0x900a5</span>, <span class="pl-c1">0x80002</span>, <span class="pl-c1">0x80082</span>, <span class="pl-c1">0x80042</span>, <span class="pl-c1">0x900e5</span>,</td>
      </tr>
      <tr>
        <td id="L189" class="blob-num js-line-number" data-line-number="189"></td>
        <td id="LC189" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x70105</span>, <span class="pl-c1">0x8005a</span>, <span class="pl-c1">0x8001a</span>, <span class="pl-c1">0x90095</span>, <span class="pl-c1">0x70115</span>, <span class="pl-c1">0x8007a</span>, <span class="pl-c1">0x8003a</span>, <span class="pl-c1">0x900d5</span>,</td>
      </tr>
      <tr>
        <td id="L190" class="blob-num js-line-number" data-line-number="190"></td>
        <td id="LC190" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x7010d</span>, <span class="pl-c1">0x8006a</span>, <span class="pl-c1">0x8002a</span>, <span class="pl-c1">0x900b5</span>, <span class="pl-c1">0x8000a</span>, <span class="pl-c1">0x8008a</span>, <span class="pl-c1">0x8004a</span>, <span class="pl-c1">0x900f5</span>,</td>
      </tr>
      <tr>
        <td id="L191" class="blob-num js-line-number" data-line-number="191"></td>
        <td id="LC191" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x70103</span>, <span class="pl-c1">0x80056</span>, <span class="pl-c1">0x80016</span>, <span class="pl-c1">0x8011e</span>, <span class="pl-c1">0x70113</span>, <span class="pl-c1">0x80076</span>, <span class="pl-c1">0x80036</span>, <span class="pl-c1">0x900cd</span>,</td>
      </tr>
      <tr>
        <td id="L192" class="blob-num js-line-number" data-line-number="192"></td>
        <td id="LC192" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x7010b</span>, <span class="pl-c1">0x80066</span>, <span class="pl-c1">0x80026</span>, <span class="pl-c1">0x900ad</span>, <span class="pl-c1">0x80006</span>, <span class="pl-c1">0x80086</span>, <span class="pl-c1">0x80046</span>, <span class="pl-c1">0x900ed</span>,</td>
      </tr>
      <tr>
        <td id="L193" class="blob-num js-line-number" data-line-number="193"></td>
        <td id="LC193" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x70107</span>, <span class="pl-c1">0x8005e</span>, <span class="pl-c1">0x8001e</span>, <span class="pl-c1">0x9009d</span>, <span class="pl-c1">0x70117</span>, <span class="pl-c1">0x8007e</span>, <span class="pl-c1">0x8003e</span>, <span class="pl-c1">0x900dd</span>,</td>
      </tr>
      <tr>
        <td id="L194" class="blob-num js-line-number" data-line-number="194"></td>
        <td id="LC194" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x7010f</span>, <span class="pl-c1">0x8006e</span>, <span class="pl-c1">0x8002e</span>, <span class="pl-c1">0x900bd</span>, <span class="pl-c1">0x8000e</span>, <span class="pl-c1">0x8008e</span>, <span class="pl-c1">0x8004e</span>, <span class="pl-c1">0x900fd</span>,</td>
      </tr>
      <tr>
        <td id="L195" class="blob-num js-line-number" data-line-number="195"></td>
        <td id="LC195" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x70100</span>, <span class="pl-c1">0x80051</span>, <span class="pl-c1">0x80011</span>, <span class="pl-c1">0x80119</span>, <span class="pl-c1">0x70110</span>, <span class="pl-c1">0x80071</span>, <span class="pl-c1">0x80031</span>, <span class="pl-c1">0x900c3</span>,</td>
      </tr>
      <tr>
        <td id="L196" class="blob-num js-line-number" data-line-number="196"></td>
        <td id="LC196" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x70108</span>, <span class="pl-c1">0x80061</span>, <span class="pl-c1">0x80021</span>, <span class="pl-c1">0x900a3</span>, <span class="pl-c1">0x80001</span>, <span class="pl-c1">0x80081</span>, <span class="pl-c1">0x80041</span>, <span class="pl-c1">0x900e3</span>,</td>
      </tr>
      <tr>
        <td id="L197" class="blob-num js-line-number" data-line-number="197"></td>
        <td id="LC197" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x70104</span>, <span class="pl-c1">0x80059</span>, <span class="pl-c1">0x80019</span>, <span class="pl-c1">0x90093</span>, <span class="pl-c1">0x70114</span>, <span class="pl-c1">0x80079</span>, <span class="pl-c1">0x80039</span>, <span class="pl-c1">0x900d3</span>,</td>
      </tr>
      <tr>
        <td id="L198" class="blob-num js-line-number" data-line-number="198"></td>
        <td id="LC198" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x7010c</span>, <span class="pl-c1">0x80069</span>, <span class="pl-c1">0x80029</span>, <span class="pl-c1">0x900b3</span>, <span class="pl-c1">0x80009</span>, <span class="pl-c1">0x80089</span>, <span class="pl-c1">0x80049</span>, <span class="pl-c1">0x900f3</span>,</td>
      </tr>
      <tr>
        <td id="L199" class="blob-num js-line-number" data-line-number="199"></td>
        <td id="LC199" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x70102</span>, <span class="pl-c1">0x80055</span>, <span class="pl-c1">0x80015</span>, <span class="pl-c1">0x8011d</span>, <span class="pl-c1">0x70112</span>, <span class="pl-c1">0x80075</span>, <span class="pl-c1">0x80035</span>, <span class="pl-c1">0x900cb</span>,</td>
      </tr>
      <tr>
        <td id="L200" class="blob-num js-line-number" data-line-number="200"></td>
        <td id="LC200" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x7010a</span>, <span class="pl-c1">0x80065</span>, <span class="pl-c1">0x80025</span>, <span class="pl-c1">0x900ab</span>, <span class="pl-c1">0x80005</span>, <span class="pl-c1">0x80085</span>, <span class="pl-c1">0x80045</span>, <span class="pl-c1">0x900eb</span>,</td>
      </tr>
      <tr>
        <td id="L201" class="blob-num js-line-number" data-line-number="201"></td>
        <td id="LC201" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x70106</span>, <span class="pl-c1">0x8005d</span>, <span class="pl-c1">0x8001d</span>, <span class="pl-c1">0x9009b</span>, <span class="pl-c1">0x70116</span>, <span class="pl-c1">0x8007d</span>, <span class="pl-c1">0x8003d</span>, <span class="pl-c1">0x900db</span>,</td>
      </tr>
      <tr>
        <td id="L202" class="blob-num js-line-number" data-line-number="202"></td>
        <td id="LC202" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x7010e</span>, <span class="pl-c1">0x8006d</span>, <span class="pl-c1">0x8002d</span>, <span class="pl-c1">0x900bb</span>, <span class="pl-c1">0x8000d</span>, <span class="pl-c1">0x8008d</span>, <span class="pl-c1">0x8004d</span>, <span class="pl-c1">0x900fb</span>,</td>
      </tr>
      <tr>
        <td id="L203" class="blob-num js-line-number" data-line-number="203"></td>
        <td id="LC203" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x70101</span>, <span class="pl-c1">0x80053</span>, <span class="pl-c1">0x80013</span>, <span class="pl-c1">0x8011b</span>, <span class="pl-c1">0x70111</span>, <span class="pl-c1">0x80073</span>, <span class="pl-c1">0x80033</span>, <span class="pl-c1">0x900c7</span>,</td>
      </tr>
      <tr>
        <td id="L204" class="blob-num js-line-number" data-line-number="204"></td>
        <td id="LC204" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x70109</span>, <span class="pl-c1">0x80063</span>, <span class="pl-c1">0x80023</span>, <span class="pl-c1">0x900a7</span>, <span class="pl-c1">0x80003</span>, <span class="pl-c1">0x80083</span>, <span class="pl-c1">0x80043</span>, <span class="pl-c1">0x900e7</span>,</td>
      </tr>
      <tr>
        <td id="L205" class="blob-num js-line-number" data-line-number="205"></td>
        <td id="LC205" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x70105</span>, <span class="pl-c1">0x8005b</span>, <span class="pl-c1">0x8001b</span>, <span class="pl-c1">0x90097</span>, <span class="pl-c1">0x70115</span>, <span class="pl-c1">0x8007b</span>, <span class="pl-c1">0x8003b</span>, <span class="pl-c1">0x900d7</span>,</td>
      </tr>
      <tr>
        <td id="L206" class="blob-num js-line-number" data-line-number="206"></td>
        <td id="LC206" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x7010d</span>, <span class="pl-c1">0x8006b</span>, <span class="pl-c1">0x8002b</span>, <span class="pl-c1">0x900b7</span>, <span class="pl-c1">0x8000b</span>, <span class="pl-c1">0x8008b</span>, <span class="pl-c1">0x8004b</span>, <span class="pl-c1">0x900f7</span>,</td>
      </tr>
      <tr>
        <td id="L207" class="blob-num js-line-number" data-line-number="207"></td>
        <td id="LC207" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x70103</span>, <span class="pl-c1">0x80057</span>, <span class="pl-c1">0x80017</span>, <span class="pl-c1">0x8011f</span>, <span class="pl-c1">0x70113</span>, <span class="pl-c1">0x80077</span>, <span class="pl-c1">0x80037</span>, <span class="pl-c1">0x900cf</span>,</td>
      </tr>
      <tr>
        <td id="L208" class="blob-num js-line-number" data-line-number="208"></td>
        <td id="LC208" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x7010b</span>, <span class="pl-c1">0x80067</span>, <span class="pl-c1">0x80027</span>, <span class="pl-c1">0x900af</span>, <span class="pl-c1">0x80007</span>, <span class="pl-c1">0x80087</span>, <span class="pl-c1">0x80047</span>, <span class="pl-c1">0x900ef</span>,</td>
      </tr>
      <tr>
        <td id="L209" class="blob-num js-line-number" data-line-number="209"></td>
        <td id="LC209" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x70107</span>, <span class="pl-c1">0x8005f</span>, <span class="pl-c1">0x8001f</span>, <span class="pl-c1">0x9009f</span>, <span class="pl-c1">0x70117</span>, <span class="pl-c1">0x8007f</span>, <span class="pl-c1">0x8003f</span>, <span class="pl-c1">0x900df</span>,</td>
      </tr>
      <tr>
        <td id="L210" class="blob-num js-line-number" data-line-number="210"></td>
        <td id="LC210" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x7010f</span>, <span class="pl-c1">0x8006f</span>, <span class="pl-c1">0x8002f</span>, <span class="pl-c1">0x900bf</span>, <span class="pl-c1">0x8000f</span>, <span class="pl-c1">0x8008f</span>, <span class="pl-c1">0x8004f</span>, <span class="pl-c1">0x900ff</span></td>
      </tr>
      <tr>
        <td id="L211" class="blob-num js-line-number" data-line-number="211"></td>
        <td id="LC211" class="blob-code blob-code-inner js-file-line">  ]), <span class="pl-c1">9</span>];</td>
      </tr>
      <tr>
        <td id="L212" class="blob-num js-line-number" data-line-number="212"></td>
        <td id="LC212" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L213" class="blob-num js-line-number" data-line-number="213"></td>
        <td id="LC213" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> fixedDistCodeTab <span class="pl-k">=</span> [<span class="pl-k">new</span> <span class="pl-en">Uint32Array</span>([</td>
      </tr>
      <tr>
        <td id="L214" class="blob-num js-line-number" data-line-number="214"></td>
        <td id="LC214" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x50000</span>, <span class="pl-c1">0x50010</span>, <span class="pl-c1">0x50008</span>, <span class="pl-c1">0x50018</span>, <span class="pl-c1">0x50004</span>, <span class="pl-c1">0x50014</span>, <span class="pl-c1">0x5000c</span>, <span class="pl-c1">0x5001c</span>,</td>
      </tr>
      <tr>
        <td id="L215" class="blob-num js-line-number" data-line-number="215"></td>
        <td id="LC215" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x50002</span>, <span class="pl-c1">0x50012</span>, <span class="pl-c1">0x5000a</span>, <span class="pl-c1">0x5001a</span>, <span class="pl-c1">0x50006</span>, <span class="pl-c1">0x50016</span>, <span class="pl-c1">0x5000e</span>, <span class="pl-c1">0x00000</span>,</td>
      </tr>
      <tr>
        <td id="L216" class="blob-num js-line-number" data-line-number="216"></td>
        <td id="LC216" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x50001</span>, <span class="pl-c1">0x50011</span>, <span class="pl-c1">0x50009</span>, <span class="pl-c1">0x50019</span>, <span class="pl-c1">0x50005</span>, <span class="pl-c1">0x50015</span>, <span class="pl-c1">0x5000d</span>, <span class="pl-c1">0x5001d</span>,</td>
      </tr>
      <tr>
        <td id="L217" class="blob-num js-line-number" data-line-number="217"></td>
        <td id="LC217" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x50003</span>, <span class="pl-c1">0x50013</span>, <span class="pl-c1">0x5000b</span>, <span class="pl-c1">0x5001b</span>, <span class="pl-c1">0x50007</span>, <span class="pl-c1">0x50017</span>, <span class="pl-c1">0x5000f</span>, <span class="pl-c1">0x00000</span></td>
      </tr>
      <tr>
        <td id="L218" class="blob-num js-line-number" data-line-number="218"></td>
        <td id="LC218" class="blob-code blob-code-inner js-file-line">  ]), <span class="pl-c1">5</span>];</td>
      </tr>
      <tr>
        <td id="L219" class="blob-num js-line-number" data-line-number="219"></td>
        <td id="LC219" class="blob-code blob-code-inner js-file-line">  </td>
      </tr>
      <tr>
        <td id="L220" class="blob-num js-line-number" data-line-number="220"></td>
        <td id="LC220" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">function</span> <span class="pl-en">error</span>(<span class="pl-smi">e</span>) {</td>
      </tr>
      <tr>
        <td id="L221" class="blob-num js-line-number" data-line-number="221"></td>
        <td id="LC221" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-en">Error</span>(e)</td>
      </tr>
      <tr>
        <td id="L222" class="blob-num js-line-number" data-line-number="222"></td>
        <td id="LC222" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L223" class="blob-num js-line-number" data-line-number="223"></td>
        <td id="LC223" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L224" class="blob-num js-line-number" data-line-number="224"></td>
        <td id="LC224" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">function</span> <span class="pl-en">constructor</span>(<span class="pl-smi">bytes</span>) {</td>
      </tr>
      <tr>
        <td id="L225" class="blob-num js-line-number" data-line-number="225"></td>
        <td id="LC225" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span>var bytes = stream.getBytes();</span></td>
      </tr>
      <tr>
        <td id="L226" class="blob-num js-line-number" data-line-number="226"></td>
        <td id="LC226" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> bytesPos <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L227" class="blob-num js-line-number" data-line-number="227"></td>
        <td id="LC227" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L228" class="blob-num js-line-number" data-line-number="228"></td>
        <td id="LC228" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> cmf <span class="pl-k">=</span> bytes[bytesPos<span class="pl-k">++</span>];</td>
      </tr>
      <tr>
        <td id="L229" class="blob-num js-line-number" data-line-number="229"></td>
        <td id="LC229" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> flg <span class="pl-k">=</span> bytes[bytesPos<span class="pl-k">++</span>];</td>
      </tr>
      <tr>
        <td id="L230" class="blob-num js-line-number" data-line-number="230"></td>
        <td id="LC230" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (cmf <span class="pl-k">==</span> <span class="pl-k">-</span><span class="pl-c1">1</span> <span class="pl-k">||</span> flg <span class="pl-k">==</span> <span class="pl-k">-</span><span class="pl-c1">1</span>)</td>
      </tr>
      <tr>
        <td id="L231" class="blob-num js-line-number" data-line-number="231"></td>
        <td id="LC231" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">error</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>Invalid header in flate stream<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L232" class="blob-num js-line-number" data-line-number="232"></td>
        <td id="LC232" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> ((cmf <span class="pl-k">&amp;</span> <span class="pl-c1">0x0f</span>) <span class="pl-k">!=</span> <span class="pl-c1">0x08</span>)</td>
      </tr>
      <tr>
        <td id="L233" class="blob-num js-line-number" data-line-number="233"></td>
        <td id="LC233" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">error</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>Unknown compression method in flate stream<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L234" class="blob-num js-line-number" data-line-number="234"></td>
        <td id="LC234" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> ((((cmf <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">8</span>) <span class="pl-k">+</span> flg) <span class="pl-k">%</span> <span class="pl-c1">31</span>) <span class="pl-k">!=</span> <span class="pl-c1">0</span>)</td>
      </tr>
      <tr>
        <td id="L235" class="blob-num js-line-number" data-line-number="235"></td>
        <td id="LC235" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">error</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>Bad FCHECK in flate stream<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L236" class="blob-num js-line-number" data-line-number="236"></td>
        <td id="LC236" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (flg <span class="pl-k">&amp;</span> <span class="pl-c1">0x20</span>)</td>
      </tr>
      <tr>
        <td id="L237" class="blob-num js-line-number" data-line-number="237"></td>
        <td id="LC237" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">error</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>FDICT bit set in flate stream<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L238" class="blob-num js-line-number" data-line-number="238"></td>
        <td id="LC238" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L239" class="blob-num js-line-number" data-line-number="239"></td>
        <td id="LC239" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-smi">bytes</span> <span class="pl-k">=</span> bytes;</td>
      </tr>
      <tr>
        <td id="L240" class="blob-num js-line-number" data-line-number="240"></td>
        <td id="LC240" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-smi">bytesPos</span> <span class="pl-k">=</span> bytesPos;</td>
      </tr>
      <tr>
        <td id="L241" class="blob-num js-line-number" data-line-number="241"></td>
        <td id="LC241" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L242" class="blob-num js-line-number" data-line-number="242"></td>
        <td id="LC242" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-smi">codeSize</span> <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L243" class="blob-num js-line-number" data-line-number="243"></td>
        <td id="LC243" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-smi">codeBuf</span> <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L244" class="blob-num js-line-number" data-line-number="244"></td>
        <td id="LC244" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L245" class="blob-num js-line-number" data-line-number="245"></td>
        <td id="LC245" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">DecodeStream</span>.<span class="pl-c1">call</span>(<span class="pl-c1">this</span>);</td>
      </tr>
      <tr>
        <td id="L246" class="blob-num js-line-number" data-line-number="246"></td>
        <td id="LC246" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L247" class="blob-num js-line-number" data-line-number="247"></td>
        <td id="LC247" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L248" class="blob-num js-line-number" data-line-number="248"></td>
        <td id="LC248" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">constructor</span>.prototype = Object.<span class="pl-en">create</span>(<span class="pl-smi">DecodeStream</span>.<span class="pl-c1">prototype</span>);</td>
      </tr>
      <tr>
        <td id="L249" class="blob-num js-line-number" data-line-number="249"></td>
        <td id="LC249" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L250" class="blob-num js-line-number" data-line-number="250"></td>
        <td id="LC250" class="blob-code blob-code-inner js-file-line">  constructor.prototype.getBits = function(bits) {</td>
      </tr>
      <tr>
        <td id="L251" class="blob-num js-line-number" data-line-number="251"></td>
        <td id="LC251" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> codeSize <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">codeSize</span>;</td>
      </tr>
      <tr>
        <td id="L252" class="blob-num js-line-number" data-line-number="252"></td>
        <td id="LC252" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> codeBuf <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">codeBuf</span>;</td>
      </tr>
      <tr>
        <td id="L253" class="blob-num js-line-number" data-line-number="253"></td>
        <td id="LC253" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> bytes <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">bytes</span>;</td>
      </tr>
      <tr>
        <td id="L254" class="blob-num js-line-number" data-line-number="254"></td>
        <td id="LC254" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> bytesPos <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">bytesPos</span>;</td>
      </tr>
      <tr>
        <td id="L255" class="blob-num js-line-number" data-line-number="255"></td>
        <td id="LC255" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L256" class="blob-num js-line-number" data-line-number="256"></td>
        <td id="LC256" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> b;</td>
      </tr>
      <tr>
        <td id="L257" class="blob-num js-line-number" data-line-number="257"></td>
        <td id="LC257" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">while</span> (codeSize <span class="pl-k">&lt;</span> bits) {</td>
      </tr>
      <tr>
        <td id="L258" class="blob-num js-line-number" data-line-number="258"></td>
        <td id="LC258" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-k">typeof</span> (b <span class="pl-k">=</span> bytes[bytesPos<span class="pl-k">++</span>]) <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L259" class="blob-num js-line-number" data-line-number="259"></td>
        <td id="LC259" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">error</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>Bad encoding in flate stream<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L260" class="blob-num js-line-number" data-line-number="260"></td>
        <td id="LC260" class="blob-code blob-code-inner js-file-line">      codeBuf <span class="pl-k">|=</span> b <span class="pl-k">&lt;&lt;</span> codeSize;</td>
      </tr>
      <tr>
        <td id="L261" class="blob-num js-line-number" data-line-number="261"></td>
        <td id="LC261" class="blob-code blob-code-inner js-file-line">      codeSize <span class="pl-k">+=</span> <span class="pl-c1">8</span>;</td>
      </tr>
      <tr>
        <td id="L262" class="blob-num js-line-number" data-line-number="262"></td>
        <td id="LC262" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L263" class="blob-num js-line-number" data-line-number="263"></td>
        <td id="LC263" class="blob-code blob-code-inner js-file-line">    b <span class="pl-k">=</span> codeBuf <span class="pl-k">&amp;</span> ((<span class="pl-c1">1</span> <span class="pl-k">&lt;&lt;</span> bits) <span class="pl-k">-</span> <span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L264" class="blob-num js-line-number" data-line-number="264"></td>
        <td id="LC264" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-smi">codeBuf</span> <span class="pl-k">=</span> codeBuf <span class="pl-k">&gt;&gt;</span> bits;</td>
      </tr>
      <tr>
        <td id="L265" class="blob-num js-line-number" data-line-number="265"></td>
        <td id="LC265" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-smi">codeSize</span> <span class="pl-k">=</span> codeSize <span class="pl-k">-=</span> bits;</td>
      </tr>
      <tr>
        <td id="L266" class="blob-num js-line-number" data-line-number="266"></td>
        <td id="LC266" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-smi">bytesPos</span> <span class="pl-k">=</span> bytesPos;</td>
      </tr>
      <tr>
        <td id="L267" class="blob-num js-line-number" data-line-number="267"></td>
        <td id="LC267" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> b;</td>
      </tr>
      <tr>
        <td id="L268" class="blob-num js-line-number" data-line-number="268"></td>
        <td id="LC268" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L269" class="blob-num js-line-number" data-line-number="269"></td>
        <td id="LC269" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L270" class="blob-num js-line-number" data-line-number="270"></td>
        <td id="LC270" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">constructor</span>.prototype.getCode = <span class="pl-k">function</span>(<span class="pl-smi">table</span>) {</td>
      </tr>
      <tr>
        <td id="L271" class="blob-num js-line-number" data-line-number="271"></td>
        <td id="LC271" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> codes <span class="pl-k">=</span> table[<span class="pl-c1">0</span>];</td>
      </tr>
      <tr>
        <td id="L272" class="blob-num js-line-number" data-line-number="272"></td>
        <td id="LC272" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> maxLen <span class="pl-k">=</span> table[<span class="pl-c1">1</span>];</td>
      </tr>
      <tr>
        <td id="L273" class="blob-num js-line-number" data-line-number="273"></td>
        <td id="LC273" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> codeSize <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">codeSize</span>;</td>
      </tr>
      <tr>
        <td id="L274" class="blob-num js-line-number" data-line-number="274"></td>
        <td id="LC274" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> codeBuf <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">codeBuf</span>;</td>
      </tr>
      <tr>
        <td id="L275" class="blob-num js-line-number" data-line-number="275"></td>
        <td id="LC275" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> bytes <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">bytes</span>;</td>
      </tr>
      <tr>
        <td id="L276" class="blob-num js-line-number" data-line-number="276"></td>
        <td id="LC276" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> bytesPos <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">bytesPos</span>;</td>
      </tr>
      <tr>
        <td id="L277" class="blob-num js-line-number" data-line-number="277"></td>
        <td id="LC277" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L278" class="blob-num js-line-number" data-line-number="278"></td>
        <td id="LC278" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">while</span> (codeSize <span class="pl-k">&lt;</span> maxLen) {</td>
      </tr>
      <tr>
        <td id="L279" class="blob-num js-line-number" data-line-number="279"></td>
        <td id="LC279" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> b;</td>
      </tr>
      <tr>
        <td id="L280" class="blob-num js-line-number" data-line-number="280"></td>
        <td id="LC280" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-k">typeof</span> (b <span class="pl-k">=</span> bytes[bytesPos<span class="pl-k">++</span>]) <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L281" class="blob-num js-line-number" data-line-number="281"></td>
        <td id="LC281" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">error</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>Bad encoding in flate stream<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L282" class="blob-num js-line-number" data-line-number="282"></td>
        <td id="LC282" class="blob-code blob-code-inner js-file-line">      codeBuf <span class="pl-k">|=</span> (b <span class="pl-k">&lt;&lt;</span> codeSize);</td>
      </tr>
      <tr>
        <td id="L283" class="blob-num js-line-number" data-line-number="283"></td>
        <td id="LC283" class="blob-code blob-code-inner js-file-line">      codeSize <span class="pl-k">+=</span> <span class="pl-c1">8</span>;</td>
      </tr>
      <tr>
        <td id="L284" class="blob-num js-line-number" data-line-number="284"></td>
        <td id="LC284" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L285" class="blob-num js-line-number" data-line-number="285"></td>
        <td id="LC285" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> code <span class="pl-k">=</span> codes[codeBuf <span class="pl-k">&amp;</span> ((<span class="pl-c1">1</span> <span class="pl-k">&lt;&lt;</span> maxLen) <span class="pl-k">-</span> <span class="pl-c1">1</span>)];</td>
      </tr>
      <tr>
        <td id="L286" class="blob-num js-line-number" data-line-number="286"></td>
        <td id="LC286" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> codeLen <span class="pl-k">=</span> code <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">16</span>;</td>
      </tr>
      <tr>
        <td id="L287" class="blob-num js-line-number" data-line-number="287"></td>
        <td id="LC287" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> codeVal <span class="pl-k">=</span> code <span class="pl-k">&amp;</span> <span class="pl-c1">0xffff</span>;</td>
      </tr>
      <tr>
        <td id="L288" class="blob-num js-line-number" data-line-number="288"></td>
        <td id="LC288" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (codeSize <span class="pl-k">==</span> <span class="pl-c1">0</span> <span class="pl-k">||</span> codeSize <span class="pl-k">&lt;</span> codeLen <span class="pl-k">||</span> codeLen <span class="pl-k">==</span> <span class="pl-c1">0</span>)</td>
      </tr>
      <tr>
        <td id="L289" class="blob-num js-line-number" data-line-number="289"></td>
        <td id="LC289" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">error</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>Bad encoding in flate stream<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L290" class="blob-num js-line-number" data-line-number="290"></td>
        <td id="LC290" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-smi">codeBuf</span> <span class="pl-k">=</span> (codeBuf <span class="pl-k">&gt;&gt;</span> codeLen);</td>
      </tr>
      <tr>
        <td id="L291" class="blob-num js-line-number" data-line-number="291"></td>
        <td id="LC291" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-smi">codeSize</span> <span class="pl-k">=</span> (codeSize <span class="pl-k">-</span> codeLen);</td>
      </tr>
      <tr>
        <td id="L292" class="blob-num js-line-number" data-line-number="292"></td>
        <td id="LC292" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-smi">bytesPos</span> <span class="pl-k">=</span> bytesPos;</td>
      </tr>
      <tr>
        <td id="L293" class="blob-num js-line-number" data-line-number="293"></td>
        <td id="LC293" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> codeVal;</td>
      </tr>
      <tr>
        <td id="L294" class="blob-num js-line-number" data-line-number="294"></td>
        <td id="LC294" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L295" class="blob-num js-line-number" data-line-number="295"></td>
        <td id="LC295" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L296" class="blob-num js-line-number" data-line-number="296"></td>
        <td id="LC296" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">constructor</span>.prototype.generateHuffmanTable = <span class="pl-k">function</span>(<span class="pl-smi">lengths</span>) {</td>
      </tr>
      <tr>
        <td id="L297" class="blob-num js-line-number" data-line-number="297"></td>
        <td id="LC297" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> n <span class="pl-k">=</span> <span class="pl-smi">lengths</span>.<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L298" class="blob-num js-line-number" data-line-number="298"></td>
        <td id="LC298" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L299" class="blob-num js-line-number" data-line-number="299"></td>
        <td id="LC299" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span> find max code length</span></td>
      </tr>
      <tr>
        <td id="L300" class="blob-num js-line-number" data-line-number="300"></td>
        <td id="LC300" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> maxLen <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L301" class="blob-num js-line-number" data-line-number="301"></td>
        <td id="LC301" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> n; <span class="pl-k">++</span>i) {</td>
      </tr>
      <tr>
        <td id="L302" class="blob-num js-line-number" data-line-number="302"></td>
        <td id="LC302" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (lengths[i] <span class="pl-k">&gt;</span> maxLen)</td>
      </tr>
      <tr>
        <td id="L303" class="blob-num js-line-number" data-line-number="303"></td>
        <td id="LC303" class="blob-code blob-code-inner js-file-line">        maxLen <span class="pl-k">=</span> lengths[i];</td>
      </tr>
      <tr>
        <td id="L304" class="blob-num js-line-number" data-line-number="304"></td>
        <td id="LC304" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L305" class="blob-num js-line-number" data-line-number="305"></td>
        <td id="LC305" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L306" class="blob-num js-line-number" data-line-number="306"></td>
        <td id="LC306" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span> build the table</span></td>
      </tr>
      <tr>
        <td id="L307" class="blob-num js-line-number" data-line-number="307"></td>
        <td id="LC307" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> size <span class="pl-k">=</span> <span class="pl-c1">1</span> <span class="pl-k">&lt;&lt;</span> maxLen;</td>
      </tr>
      <tr>
        <td id="L308" class="blob-num js-line-number" data-line-number="308"></td>
        <td id="LC308" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> codes <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Uint32Array</span>(size);</td>
      </tr>
      <tr>
        <td id="L309" class="blob-num js-line-number" data-line-number="309"></td>
        <td id="LC309" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">for</span> (<span class="pl-k">var</span> len <span class="pl-k">=</span> <span class="pl-c1">1</span>, code <span class="pl-k">=</span> <span class="pl-c1">0</span>, skip <span class="pl-k">=</span> <span class="pl-c1">2</span>;</td>
      </tr>
      <tr>
        <td id="L310" class="blob-num js-line-number" data-line-number="310"></td>
        <td id="LC310" class="blob-code blob-code-inner js-file-line">         len <span class="pl-k">&lt;=</span> maxLen;</td>
      </tr>
      <tr>
        <td id="L311" class="blob-num js-line-number" data-line-number="311"></td>
        <td id="LC311" class="blob-code blob-code-inner js-file-line">         <span class="pl-k">++</span>len, code <span class="pl-k">&lt;&lt;=</span> <span class="pl-c1">1</span>, skip <span class="pl-k">&lt;&lt;=</span> <span class="pl-c1">1</span>) {</td>
      </tr>
      <tr>
        <td id="L312" class="blob-num js-line-number" data-line-number="312"></td>
        <td id="LC312" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">for</span> (<span class="pl-k">var</span> val <span class="pl-k">=</span> <span class="pl-c1">0</span>; val <span class="pl-k">&lt;</span> n; <span class="pl-k">++</span>val) {</td>
      </tr>
      <tr>
        <td id="L313" class="blob-num js-line-number" data-line-number="313"></td>
        <td id="LC313" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (lengths[val] <span class="pl-k">==</span> len) {</td>
      </tr>
      <tr>
        <td id="L314" class="blob-num js-line-number" data-line-number="314"></td>
        <td id="LC314" class="blob-code blob-code-inner js-file-line">          <span class="pl-c"><span class="pl-c">//</span> bit-reverse the code</span></td>
      </tr>
      <tr>
        <td id="L315" class="blob-num js-line-number" data-line-number="315"></td>
        <td id="LC315" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> code2 <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L316" class="blob-num js-line-number" data-line-number="316"></td>
        <td id="LC316" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> t <span class="pl-k">=</span> code;</td>
      </tr>
      <tr>
        <td id="L317" class="blob-num js-line-number" data-line-number="317"></td>
        <td id="LC317" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> len; <span class="pl-k">++</span>i) {</td>
      </tr>
      <tr>
        <td id="L318" class="blob-num js-line-number" data-line-number="318"></td>
        <td id="LC318" class="blob-code blob-code-inner js-file-line">            code2 <span class="pl-k">=</span> (code2 <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">1</span>) <span class="pl-k">|</span> (t <span class="pl-k">&amp;</span> <span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L319" class="blob-num js-line-number" data-line-number="319"></td>
        <td id="LC319" class="blob-code blob-code-inner js-file-line">            t <span class="pl-k">&gt;&gt;=</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L320" class="blob-num js-line-number" data-line-number="320"></td>
        <td id="LC320" class="blob-code blob-code-inner js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L321" class="blob-num js-line-number" data-line-number="321"></td>
        <td id="LC321" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L322" class="blob-num js-line-number" data-line-number="322"></td>
        <td id="LC322" class="blob-code blob-code-inner js-file-line">          <span class="pl-c"><span class="pl-c">//</span> fill the table entries</span></td>
      </tr>
      <tr>
        <td id="L323" class="blob-num js-line-number" data-line-number="323"></td>
        <td id="LC323" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">=</span> code2; i <span class="pl-k">&lt;</span> size; i <span class="pl-k">+=</span> skip)</td>
      </tr>
      <tr>
        <td id="L324" class="blob-num js-line-number" data-line-number="324"></td>
        <td id="LC324" class="blob-code blob-code-inner js-file-line">            codes[i] <span class="pl-k">=</span> (len <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">16</span>) <span class="pl-k">|</span> val;</td>
      </tr>
      <tr>
        <td id="L325" class="blob-num js-line-number" data-line-number="325"></td>
        <td id="LC325" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L326" class="blob-num js-line-number" data-line-number="326"></td>
        <td id="LC326" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">++</span>code;</td>
      </tr>
      <tr>
        <td id="L327" class="blob-num js-line-number" data-line-number="327"></td>
        <td id="LC327" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L328" class="blob-num js-line-number" data-line-number="328"></td>
        <td id="LC328" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L329" class="blob-num js-line-number" data-line-number="329"></td>
        <td id="LC329" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L330" class="blob-num js-line-number" data-line-number="330"></td>
        <td id="LC330" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L331" class="blob-num js-line-number" data-line-number="331"></td>
        <td id="LC331" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> [codes, maxLen];</td>
      </tr>
      <tr>
        <td id="L332" class="blob-num js-line-number" data-line-number="332"></td>
        <td id="LC332" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L333" class="blob-num js-line-number" data-line-number="333"></td>
        <td id="LC333" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L334" class="blob-num js-line-number" data-line-number="334"></td>
        <td id="LC334" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">constructor</span>.prototype.readBlock = <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L335" class="blob-num js-line-number" data-line-number="335"></td>
        <td id="LC335" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">repeat</span>(<span class="pl-smi">stream</span>, <span class="pl-smi">array</span>, <span class="pl-smi">len</span>, <span class="pl-smi">offset</span>, <span class="pl-smi">what</span>) {</td>
      </tr>
      <tr>
        <td id="L336" class="blob-num js-line-number" data-line-number="336"></td>
        <td id="LC336" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> repeat <span class="pl-k">=</span> <span class="pl-smi">stream</span>.<span class="pl-en">getBits</span>(len) <span class="pl-k">+</span> offset;</td>
      </tr>
      <tr>
        <td id="L337" class="blob-num js-line-number" data-line-number="337"></td>
        <td id="LC337" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">while</span> (repeat<span class="pl-k">--</span> <span class="pl-k">&gt;</span> <span class="pl-c1">0</span>)</td>
      </tr>
      <tr>
        <td id="L338" class="blob-num js-line-number" data-line-number="338"></td>
        <td id="LC338" class="blob-code blob-code-inner js-file-line">        array[i<span class="pl-k">++</span>] <span class="pl-k">=</span> what;</td>
      </tr>
      <tr>
        <td id="L339" class="blob-num js-line-number" data-line-number="339"></td>
        <td id="LC339" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L340" class="blob-num js-line-number" data-line-number="340"></td>
        <td id="LC340" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L341" class="blob-num js-line-number" data-line-number="341"></td>
        <td id="LC341" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span> read block header</span></td>
      </tr>
      <tr>
        <td id="L342" class="blob-num js-line-number" data-line-number="342"></td>
        <td id="LC342" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> hdr <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">getBits</span>(<span class="pl-c1">3</span>);</td>
      </tr>
      <tr>
        <td id="L343" class="blob-num js-line-number" data-line-number="343"></td>
        <td id="LC343" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (hdr <span class="pl-k">&amp;</span> <span class="pl-c1">1</span>)</td>
      </tr>
      <tr>
        <td id="L344" class="blob-num js-line-number" data-line-number="344"></td>
        <td id="LC344" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">this</span>.<span class="pl-smi">eof</span> <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L345" class="blob-num js-line-number" data-line-number="345"></td>
        <td id="LC345" class="blob-code blob-code-inner js-file-line">    hdr <span class="pl-k">&gt;&gt;=</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L346" class="blob-num js-line-number" data-line-number="346"></td>
        <td id="LC346" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L347" class="blob-num js-line-number" data-line-number="347"></td>
        <td id="LC347" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (hdr <span class="pl-k">==</span> <span class="pl-c1">0</span>) { <span class="pl-c"><span class="pl-c">//</span> uncompressed block</span></td>
      </tr>
      <tr>
        <td id="L348" class="blob-num js-line-number" data-line-number="348"></td>
        <td id="LC348" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> bytes <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">bytes</span>;</td>
      </tr>
      <tr>
        <td id="L349" class="blob-num js-line-number" data-line-number="349"></td>
        <td id="LC349" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> bytesPos <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">bytesPos</span>;</td>
      </tr>
      <tr>
        <td id="L350" class="blob-num js-line-number" data-line-number="350"></td>
        <td id="LC350" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> b;</td>
      </tr>
      <tr>
        <td id="L351" class="blob-num js-line-number" data-line-number="351"></td>
        <td id="LC351" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L352" class="blob-num js-line-number" data-line-number="352"></td>
        <td id="LC352" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-k">typeof</span> (b <span class="pl-k">=</span> bytes[bytesPos<span class="pl-k">++</span>]) <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L353" class="blob-num js-line-number" data-line-number="353"></td>
        <td id="LC353" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">error</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>Bad block header in flate stream<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L354" class="blob-num js-line-number" data-line-number="354"></td>
        <td id="LC354" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> blockLen <span class="pl-k">=</span> b;</td>
      </tr>
      <tr>
        <td id="L355" class="blob-num js-line-number" data-line-number="355"></td>
        <td id="LC355" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-k">typeof</span> (b <span class="pl-k">=</span> bytes[bytesPos<span class="pl-k">++</span>]) <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L356" class="blob-num js-line-number" data-line-number="356"></td>
        <td id="LC356" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">error</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>Bad block header in flate stream<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L357" class="blob-num js-line-number" data-line-number="357"></td>
        <td id="LC357" class="blob-code blob-code-inner js-file-line">      blockLen <span class="pl-k">|=</span> (b <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">8</span>);</td>
      </tr>
      <tr>
        <td id="L358" class="blob-num js-line-number" data-line-number="358"></td>
        <td id="LC358" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-k">typeof</span> (b <span class="pl-k">=</span> bytes[bytesPos<span class="pl-k">++</span>]) <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L359" class="blob-num js-line-number" data-line-number="359"></td>
        <td id="LC359" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">error</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>Bad block header in flate stream<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L360" class="blob-num js-line-number" data-line-number="360"></td>
        <td id="LC360" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> check <span class="pl-k">=</span> b;</td>
      </tr>
      <tr>
        <td id="L361" class="blob-num js-line-number" data-line-number="361"></td>
        <td id="LC361" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-k">typeof</span> (b <span class="pl-k">=</span> bytes[bytesPos<span class="pl-k">++</span>]) <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L362" class="blob-num js-line-number" data-line-number="362"></td>
        <td id="LC362" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">error</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>Bad block header in flate stream<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L363" class="blob-num js-line-number" data-line-number="363"></td>
        <td id="LC363" class="blob-code blob-code-inner js-file-line">      check <span class="pl-k">|=</span> (b <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">8</span>);</td>
      </tr>
      <tr>
        <td id="L364" class="blob-num js-line-number" data-line-number="364"></td>
        <td id="LC364" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (check <span class="pl-k">!=</span> (<span class="pl-k">~</span>blockLen <span class="pl-k">&amp;</span> <span class="pl-c1">0xffff</span>))</td>
      </tr>
      <tr>
        <td id="L365" class="blob-num js-line-number" data-line-number="365"></td>
        <td id="LC365" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">error</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>Bad uncompressed block length in flate stream<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L366" class="blob-num js-line-number" data-line-number="366"></td>
        <td id="LC366" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L367" class="blob-num js-line-number" data-line-number="367"></td>
        <td id="LC367" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">this</span>.<span class="pl-smi">codeBuf</span> <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L368" class="blob-num js-line-number" data-line-number="368"></td>
        <td id="LC368" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">this</span>.<span class="pl-smi">codeSize</span> <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L369" class="blob-num js-line-number" data-line-number="369"></td>
        <td id="LC369" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L370" class="blob-num js-line-number" data-line-number="370"></td>
        <td id="LC370" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> bufferLength <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">bufferLength</span>;</td>
      </tr>
      <tr>
        <td id="L371" class="blob-num js-line-number" data-line-number="371"></td>
        <td id="LC371" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> buffer <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">ensureBuffer</span>(bufferLength <span class="pl-k">+</span> blockLen);</td>
      </tr>
      <tr>
        <td id="L372" class="blob-num js-line-number" data-line-number="372"></td>
        <td id="LC372" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> end <span class="pl-k">=</span> bufferLength <span class="pl-k">+</span> blockLen;</td>
      </tr>
      <tr>
        <td id="L373" class="blob-num js-line-number" data-line-number="373"></td>
        <td id="LC373" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">this</span>.<span class="pl-smi">bufferLength</span> <span class="pl-k">=</span> end;</td>
      </tr>
      <tr>
        <td id="L374" class="blob-num js-line-number" data-line-number="374"></td>
        <td id="LC374" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">for</span> (<span class="pl-k">var</span> n <span class="pl-k">=</span> bufferLength; n <span class="pl-k">&lt;</span> end; <span class="pl-k">++</span>n) {</td>
      </tr>
      <tr>
        <td id="L375" class="blob-num js-line-number" data-line-number="375"></td>
        <td id="LC375" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-k">typeof</span> (b <span class="pl-k">=</span> bytes[bytesPos<span class="pl-k">++</span>]) <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L376" class="blob-num js-line-number" data-line-number="376"></td>
        <td id="LC376" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">this</span>.<span class="pl-smi">eof</span> <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L377" class="blob-num js-line-number" data-line-number="377"></td>
        <td id="LC377" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L378" class="blob-num js-line-number" data-line-number="378"></td>
        <td id="LC378" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L379" class="blob-num js-line-number" data-line-number="379"></td>
        <td id="LC379" class="blob-code blob-code-inner js-file-line">        buffer[n] <span class="pl-k">=</span> b;</td>
      </tr>
      <tr>
        <td id="L380" class="blob-num js-line-number" data-line-number="380"></td>
        <td id="LC380" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L381" class="blob-num js-line-number" data-line-number="381"></td>
        <td id="LC381" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">this</span>.<span class="pl-smi">bytesPos</span> <span class="pl-k">=</span> bytesPos;</td>
      </tr>
      <tr>
        <td id="L382" class="blob-num js-line-number" data-line-number="382"></td>
        <td id="LC382" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L383" class="blob-num js-line-number" data-line-number="383"></td>
        <td id="LC383" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L384" class="blob-num js-line-number" data-line-number="384"></td>
        <td id="LC384" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L385" class="blob-num js-line-number" data-line-number="385"></td>
        <td id="LC385" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> litCodeTable;</td>
      </tr>
      <tr>
        <td id="L386" class="blob-num js-line-number" data-line-number="386"></td>
        <td id="LC386" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> distCodeTable;</td>
      </tr>
      <tr>
        <td id="L387" class="blob-num js-line-number" data-line-number="387"></td>
        <td id="LC387" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (hdr <span class="pl-k">==</span> <span class="pl-c1">1</span>) { <span class="pl-c"><span class="pl-c">//</span> compressed block, fixed codes</span></td>
      </tr>
      <tr>
        <td id="L388" class="blob-num js-line-number" data-line-number="388"></td>
        <td id="LC388" class="blob-code blob-code-inner js-file-line">      litCodeTable <span class="pl-k">=</span> fixedLitCodeTab;</td>
      </tr>
      <tr>
        <td id="L389" class="blob-num js-line-number" data-line-number="389"></td>
        <td id="LC389" class="blob-code blob-code-inner js-file-line">      distCodeTable <span class="pl-k">=</span> fixedDistCodeTab;</td>
      </tr>
      <tr>
        <td id="L390" class="blob-num js-line-number" data-line-number="390"></td>
        <td id="LC390" class="blob-code blob-code-inner js-file-line">    } <span class="pl-k">else</span> <span class="pl-k">if</span> (hdr <span class="pl-k">==</span> <span class="pl-c1">2</span>) { <span class="pl-c"><span class="pl-c">//</span> compressed block, dynamic codes</span></td>
      </tr>
      <tr>
        <td id="L391" class="blob-num js-line-number" data-line-number="391"></td>
        <td id="LC391" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> numLitCodes <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">getBits</span>(<span class="pl-c1">5</span>) <span class="pl-k">+</span> <span class="pl-c1">257</span>;</td>
      </tr>
      <tr>
        <td id="L392" class="blob-num js-line-number" data-line-number="392"></td>
        <td id="LC392" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> numDistCodes <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">getBits</span>(<span class="pl-c1">5</span>) <span class="pl-k">+</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L393" class="blob-num js-line-number" data-line-number="393"></td>
        <td id="LC393" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> numCodeLenCodes <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">getBits</span>(<span class="pl-c1">4</span>) <span class="pl-k">+</span> <span class="pl-c1">4</span>;</td>
      </tr>
      <tr>
        <td id="L394" class="blob-num js-line-number" data-line-number="394"></td>
        <td id="LC394" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L395" class="blob-num js-line-number" data-line-number="395"></td>
        <td id="LC395" class="blob-code blob-code-inner js-file-line">      <span class="pl-c"><span class="pl-c">//</span> build the code lengths code table</span></td>
      </tr>
      <tr>
        <td id="L396" class="blob-num js-line-number" data-line-number="396"></td>
        <td id="LC396" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> codeLenCodeLengths <span class="pl-k">=</span> <span class="pl-c1">Array</span>(<span class="pl-smi">codeLenCodeMap</span>.<span class="pl-c1">length</span>);</td>
      </tr>
      <tr>
        <td id="L397" class="blob-num js-line-number" data-line-number="397"></td>
        <td id="LC397" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L398" class="blob-num js-line-number" data-line-number="398"></td>
        <td id="LC398" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">while</span> (i <span class="pl-k">&lt;</span> numCodeLenCodes)</td>
      </tr>
      <tr>
        <td id="L399" class="blob-num js-line-number" data-line-number="399"></td>
        <td id="LC399" class="blob-code blob-code-inner js-file-line">        codeLenCodeLengths[codeLenCodeMap[i<span class="pl-k">++</span>]] <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">getBits</span>(<span class="pl-c1">3</span>);</td>
      </tr>
      <tr>
        <td id="L400" class="blob-num js-line-number" data-line-number="400"></td>
        <td id="LC400" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> codeLenCodeTab <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">generateHuffmanTable</span>(codeLenCodeLengths);</td>
      </tr>
      <tr>
        <td id="L401" class="blob-num js-line-number" data-line-number="401"></td>
        <td id="LC401" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L402" class="blob-num js-line-number" data-line-number="402"></td>
        <td id="LC402" class="blob-code blob-code-inner js-file-line">      <span class="pl-c"><span class="pl-c">//</span> build the literal and distance code tables</span></td>
      </tr>
      <tr>
        <td id="L403" class="blob-num js-line-number" data-line-number="403"></td>
        <td id="LC403" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> len <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L404" class="blob-num js-line-number" data-line-number="404"></td>
        <td id="LC404" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L405" class="blob-num js-line-number" data-line-number="405"></td>
        <td id="LC405" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> codes <span class="pl-k">=</span> numLitCodes <span class="pl-k">+</span> numDistCodes;</td>
      </tr>
      <tr>
        <td id="L406" class="blob-num js-line-number" data-line-number="406"></td>
        <td id="LC406" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> codeLengths <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Array</span>(codes);</td>
      </tr>
      <tr>
        <td id="L407" class="blob-num js-line-number" data-line-number="407"></td>
        <td id="LC407" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">while</span> (i <span class="pl-k">&lt;</span> codes) {</td>
      </tr>
      <tr>
        <td id="L408" class="blob-num js-line-number" data-line-number="408"></td>
        <td id="LC408" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> code <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">getCode</span>(codeLenCodeTab);</td>
      </tr>
      <tr>
        <td id="L409" class="blob-num js-line-number" data-line-number="409"></td>
        <td id="LC409" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (code <span class="pl-k">==</span> <span class="pl-c1">16</span>) {</td>
      </tr>
      <tr>
        <td id="L410" class="blob-num js-line-number" data-line-number="410"></td>
        <td id="LC410" class="blob-code blob-code-inner js-file-line">          <span class="pl-en">repeat</span>(<span class="pl-c1">this</span>, codeLengths, <span class="pl-c1">2</span>, <span class="pl-c1">3</span>, len);</td>
      </tr>
      <tr>
        <td id="L411" class="blob-num js-line-number" data-line-number="411"></td>
        <td id="LC411" class="blob-code blob-code-inner js-file-line">        } <span class="pl-k">else</span> <span class="pl-k">if</span> (code <span class="pl-k">==</span> <span class="pl-c1">17</span>) {</td>
      </tr>
      <tr>
        <td id="L412" class="blob-num js-line-number" data-line-number="412"></td>
        <td id="LC412" class="blob-code blob-code-inner js-file-line">          <span class="pl-en">repeat</span>(<span class="pl-c1">this</span>, codeLengths, <span class="pl-c1">3</span>, <span class="pl-c1">3</span>, len <span class="pl-k">=</span> <span class="pl-c1">0</span>);</td>
      </tr>
      <tr>
        <td id="L413" class="blob-num js-line-number" data-line-number="413"></td>
        <td id="LC413" class="blob-code blob-code-inner js-file-line">        } <span class="pl-k">else</span> <span class="pl-k">if</span> (code <span class="pl-k">==</span> <span class="pl-c1">18</span>) {</td>
      </tr>
      <tr>
        <td id="L414" class="blob-num js-line-number" data-line-number="414"></td>
        <td id="LC414" class="blob-code blob-code-inner js-file-line">          <span class="pl-en">repeat</span>(<span class="pl-c1">this</span>, codeLengths, <span class="pl-c1">7</span>, <span class="pl-c1">11</span>, len <span class="pl-k">=</span> <span class="pl-c1">0</span>);</td>
      </tr>
      <tr>
        <td id="L415" class="blob-num js-line-number" data-line-number="415"></td>
        <td id="LC415" class="blob-code blob-code-inner js-file-line">        } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L416" class="blob-num js-line-number" data-line-number="416"></td>
        <td id="LC416" class="blob-code blob-code-inner js-file-line">          codeLengths[i<span class="pl-k">++</span>] <span class="pl-k">=</span> len <span class="pl-k">=</span> code;</td>
      </tr>
      <tr>
        <td id="L417" class="blob-num js-line-number" data-line-number="417"></td>
        <td id="LC417" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L418" class="blob-num js-line-number" data-line-number="418"></td>
        <td id="LC418" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L419" class="blob-num js-line-number" data-line-number="419"></td>
        <td id="LC419" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L420" class="blob-num js-line-number" data-line-number="420"></td>
        <td id="LC420" class="blob-code blob-code-inner js-file-line">      litCodeTable <span class="pl-k">=</span></td>
      </tr>
      <tr>
        <td id="L421" class="blob-num js-line-number" data-line-number="421"></td>
        <td id="LC421" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-en">generateHuffmanTable</span>(<span class="pl-smi">codeLengths</span>.<span class="pl-c1">slice</span>(<span class="pl-c1">0</span>, numLitCodes));</td>
      </tr>
      <tr>
        <td id="L422" class="blob-num js-line-number" data-line-number="422"></td>
        <td id="LC422" class="blob-code blob-code-inner js-file-line">      distCodeTable <span class="pl-k">=</span></td>
      </tr>
      <tr>
        <td id="L423" class="blob-num js-line-number" data-line-number="423"></td>
        <td id="LC423" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-en">generateHuffmanTable</span>(<span class="pl-smi">codeLengths</span>.<span class="pl-c1">slice</span>(numLitCodes, codes));</td>
      </tr>
      <tr>
        <td id="L424" class="blob-num js-line-number" data-line-number="424"></td>
        <td id="LC424" class="blob-code blob-code-inner js-file-line">    } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L425" class="blob-num js-line-number" data-line-number="425"></td>
        <td id="LC425" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">error</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>Unknown block type in flate stream<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L426" class="blob-num js-line-number" data-line-number="426"></td>
        <td id="LC426" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L427" class="blob-num js-line-number" data-line-number="427"></td>
        <td id="LC427" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L428" class="blob-num js-line-number" data-line-number="428"></td>
        <td id="LC428" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> buffer <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">buffer</span>;</td>
      </tr>
      <tr>
        <td id="L429" class="blob-num js-line-number" data-line-number="429"></td>
        <td id="LC429" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> limit <span class="pl-k">=</span> buffer <span class="pl-k">?</span> <span class="pl-smi">buffer</span>.<span class="pl-c1">length</span> <span class="pl-k">:</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L430" class="blob-num js-line-number" data-line-number="430"></td>
        <td id="LC430" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> pos <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">bufferLength</span>;</td>
      </tr>
      <tr>
        <td id="L431" class="blob-num js-line-number" data-line-number="431"></td>
        <td id="LC431" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">while</span> (<span class="pl-c1">true</span>) {</td>
      </tr>
      <tr>
        <td id="L432" class="blob-num js-line-number" data-line-number="432"></td>
        <td id="LC432" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> code1 <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">getCode</span>(litCodeTable);</td>
      </tr>
      <tr>
        <td id="L433" class="blob-num js-line-number" data-line-number="433"></td>
        <td id="LC433" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (code1 <span class="pl-k">&lt;</span> <span class="pl-c1">256</span>) {</td>
      </tr>
      <tr>
        <td id="L434" class="blob-num js-line-number" data-line-number="434"></td>
        <td id="LC434" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (pos <span class="pl-k">+</span> <span class="pl-c1">1</span> <span class="pl-k">&gt;=</span> limit) {</td>
      </tr>
      <tr>
        <td id="L435" class="blob-num js-line-number" data-line-number="435"></td>
        <td id="LC435" class="blob-code blob-code-inner js-file-line">          buffer <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">ensureBuffer</span>(pos <span class="pl-k">+</span> <span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L436" class="blob-num js-line-number" data-line-number="436"></td>
        <td id="LC436" class="blob-code blob-code-inner js-file-line">          limit <span class="pl-k">=</span> <span class="pl-smi">buffer</span>.<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L437" class="blob-num js-line-number" data-line-number="437"></td>
        <td id="LC437" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L438" class="blob-num js-line-number" data-line-number="438"></td>
        <td id="LC438" class="blob-code blob-code-inner js-file-line">        buffer[pos<span class="pl-k">++</span>] <span class="pl-k">=</span> code1;</td>
      </tr>
      <tr>
        <td id="L439" class="blob-num js-line-number" data-line-number="439"></td>
        <td id="LC439" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">continue</span>;</td>
      </tr>
      <tr>
        <td id="L440" class="blob-num js-line-number" data-line-number="440"></td>
        <td id="LC440" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L441" class="blob-num js-line-number" data-line-number="441"></td>
        <td id="LC441" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (code1 <span class="pl-k">==</span> <span class="pl-c1">256</span>) {</td>
      </tr>
      <tr>
        <td id="L442" class="blob-num js-line-number" data-line-number="442"></td>
        <td id="LC442" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-smi">bufferLength</span> <span class="pl-k">=</span> pos;</td>
      </tr>
      <tr>
        <td id="L443" class="blob-num js-line-number" data-line-number="443"></td>
        <td id="LC443" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L444" class="blob-num js-line-number" data-line-number="444"></td>
        <td id="LC444" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L445" class="blob-num js-line-number" data-line-number="445"></td>
        <td id="LC445" class="blob-code blob-code-inner js-file-line">      code1 <span class="pl-k">-=</span> <span class="pl-c1">257</span>;</td>
      </tr>
      <tr>
        <td id="L446" class="blob-num js-line-number" data-line-number="446"></td>
        <td id="LC446" class="blob-code blob-code-inner js-file-line">      code1 <span class="pl-k">=</span> lengthDecode[code1];</td>
      </tr>
      <tr>
        <td id="L447" class="blob-num js-line-number" data-line-number="447"></td>
        <td id="LC447" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> code2 <span class="pl-k">=</span> code1 <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">16</span>;</td>
      </tr>
      <tr>
        <td id="L448" class="blob-num js-line-number" data-line-number="448"></td>
        <td id="LC448" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (code2 <span class="pl-k">&gt;</span> <span class="pl-c1">0</span>)</td>
      </tr>
      <tr>
        <td id="L449" class="blob-num js-line-number" data-line-number="449"></td>
        <td id="LC449" class="blob-code blob-code-inner js-file-line">        code2 <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">getBits</span>(code2);</td>
      </tr>
      <tr>
        <td id="L450" class="blob-num js-line-number" data-line-number="450"></td>
        <td id="LC450" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> len <span class="pl-k">=</span> (code1 <span class="pl-k">&amp;</span> <span class="pl-c1">0xffff</span>) <span class="pl-k">+</span> code2;</td>
      </tr>
      <tr>
        <td id="L451" class="blob-num js-line-number" data-line-number="451"></td>
        <td id="LC451" class="blob-code blob-code-inner js-file-line">      code1 <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">getCode</span>(distCodeTable);</td>
      </tr>
      <tr>
        <td id="L452" class="blob-num js-line-number" data-line-number="452"></td>
        <td id="LC452" class="blob-code blob-code-inner js-file-line">      code1 <span class="pl-k">=</span> distDecode[code1];</td>
      </tr>
      <tr>
        <td id="L453" class="blob-num js-line-number" data-line-number="453"></td>
        <td id="LC453" class="blob-code blob-code-inner js-file-line">      code2 <span class="pl-k">=</span> code1 <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">16</span>;</td>
      </tr>
      <tr>
        <td id="L454" class="blob-num js-line-number" data-line-number="454"></td>
        <td id="LC454" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (code2 <span class="pl-k">&gt;</span> <span class="pl-c1">0</span>)</td>
      </tr>
      <tr>
        <td id="L455" class="blob-num js-line-number" data-line-number="455"></td>
        <td id="LC455" class="blob-code blob-code-inner js-file-line">        code2 <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">getBits</span>(code2);</td>
      </tr>
      <tr>
        <td id="L456" class="blob-num js-line-number" data-line-number="456"></td>
        <td id="LC456" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> dist <span class="pl-k">=</span> (code1 <span class="pl-k">&amp;</span> <span class="pl-c1">0xffff</span>) <span class="pl-k">+</span> code2;</td>
      </tr>
      <tr>
        <td id="L457" class="blob-num js-line-number" data-line-number="457"></td>
        <td id="LC457" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (pos <span class="pl-k">+</span> len <span class="pl-k">&gt;=</span> limit) {</td>
      </tr>
      <tr>
        <td id="L458" class="blob-num js-line-number" data-line-number="458"></td>
        <td id="LC458" class="blob-code blob-code-inner js-file-line">        buffer <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">ensureBuffer</span>(pos <span class="pl-k">+</span> len);</td>
      </tr>
      <tr>
        <td id="L459" class="blob-num js-line-number" data-line-number="459"></td>
        <td id="LC459" class="blob-code blob-code-inner js-file-line">        limit <span class="pl-k">=</span> <span class="pl-smi">buffer</span>.<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L460" class="blob-num js-line-number" data-line-number="460"></td>
        <td id="LC460" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L461" class="blob-num js-line-number" data-line-number="461"></td>
        <td id="LC461" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">for</span> (<span class="pl-k">var</span> k <span class="pl-k">=</span> <span class="pl-c1">0</span>; k <span class="pl-k">&lt;</span> len; <span class="pl-k">++</span>k, <span class="pl-k">++</span>pos)</td>
      </tr>
      <tr>
        <td id="L462" class="blob-num js-line-number" data-line-number="462"></td>
        <td id="LC462" class="blob-code blob-code-inner js-file-line">        buffer[pos] <span class="pl-k">=</span> buffer[pos <span class="pl-k">-</span> dist];</td>
      </tr>
      <tr>
        <td id="L463" class="blob-num js-line-number" data-line-number="463"></td>
        <td id="LC463" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L464" class="blob-num js-line-number" data-line-number="464"></td>
        <td id="LC464" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L465" class="blob-num js-line-number" data-line-number="465"></td>
        <td id="LC465" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L466" class="blob-num js-line-number" data-line-number="466"></td>
        <td id="LC466" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">return</span> <span class="pl-en">constructor</span>;</td>
      </tr>
      <tr>
        <td id="L467" class="blob-num js-line-number" data-line-number="467"></td>
        <td id="LC467" class="blob-code blob-code-inner js-file-line">})();</td>
      </tr>
</table>

  <div class="BlobToolbar position-absolute js-file-line-actions dropdown js-menu-container js-select-menu d-none" aria-hidden="true">
    <button class="btn-octicon ml-0 px-2 p-0 bg-white border border-gray-dark rounded-1 dropdown-toggle js-menu-target" id="js-file-line-action-button" type="button" aria-expanded="false" aria-haspopup="true" aria-label="Inline file action toolbar" aria-controls="inline-file-actions">
      <svg aria-hidden="true" class="octicon octicon-kebab-horizontal" height="16" version="1.1" viewBox="0 0 13 16" width="13"><path fill-rule="evenodd" d="M1.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/></svg>
    </button>
    <div class="dropdown-menu-content js-menu-content" id="inline-file-actions">
      <ul class="BlobToolbar-dropdown dropdown-menu dropdown-menu-se mt-2">
        <li><a class="js-zeroclipboard dropdown-item" style="cursor:pointer;" id="js-copy-lines" data-original-text="Copy lines">Copy lines</a></li>
        <li><a class="js-zeroclipboard dropdown-item" id= "js-copy-permalink" style="cursor:pointer;" data-original-text="Copy permalink">Copy permalink</a></li>
        <li><a href="/MrRio/jsPDF/blame/9092df51395f4ca1c769532b7bc8950597d23c36/libs/png_support/zlib.js" class="dropdown-item js-update-url-with-hash" id="js-view-git-blame">View git blame</a></li>
          <li><a href="/MrRio/jsPDF/issues/new" class="dropdown-item" id="js-new-issue">Open new issue</a></li>
      </ul>
    </div>
  </div>

  </div>

  </div>

  <button type="button" data-facebox="#jump-to-line" data-facebox-class="linejump" data-hotkey="l" class="d-none">Jump to Line</button>
  <div id="jump-to-line" style="display:none">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
      <input class="form-control linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
      <button type="submit" class="btn">Go</button>
</form>  </div>


  </div>
  <div class="modal-backdrop js-touch-events"></div>
</div>

    </div>
  </div>

  </div>

      
<div class="footer container-lg px-3" role="contentinfo">
  <div class="position-relative d-flex flex-justify-between py-6 mt-6 f6 text-gray border-top border-gray-light ">
    <ul class="list-style-none d-flex flex-wrap ">
      <li class="mr-3">&copy; 2018 <span title="0.26694s from unicorn-2069043809-99rvk">GitHub</span>, Inc.</li>
        <li class="mr-3"><a href="https://help.github.com/articles/github-terms-of-service/" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li class="mr-3"><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li class="mr-3"><a href="https://help.github.com/articles/github-security/" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li class="mr-3"><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>

    <a href="https://github.com" aria-label="Homepage" class="footer-octicon" title="GitHub">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="24" version="1.1" viewBox="0 0 16 16" width="24"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>
    <ul class="list-style-none d-flex flex-wrap ">
        <li class="mr-3"><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact GitHub</a></li>
      <li class="mr-3"><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li class="mr-3"><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li class="mr-3"><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li class="mr-3"><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>
  </div>
</div>



  <div id="ajax-error-message" class="ajax-error-message flash flash-error">
    <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
    <button type="button" class="flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
    You can't perform that action at this time.
  </div>


    
    <script crossorigin="anonymous" integrity="sha512-ayq/dv5ggrTCJCGJ3tUwJSkbgdCXSV0/Vd014mYmtEkp2VUu+FbmFS9l5LYzOHfDIRF9MoSKhcbzc4sYWZ3RiA==" src="https://assets-cdn.github.com/assets/frameworks-6b2abf76fe60.js" type="application/javascript"></script>
    
    <script async="async" crossorigin="anonymous" integrity="sha512-DdAh2A7275VvvYV+NmSPxuw74vz/jdvbgcYyiQ45WAsT6gq43F+aEBvv7p2NS1Y8IH9Ht0iuGIvTuzT3BGholQ==" src="https://assets-cdn.github.com/assets/github-0dd021d80ef6.js" type="application/javascript"></script>
    
    
    
    
  <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner d-none">
    <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
    <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
    <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
  </div>
  <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
  </div>
</div>

  

  </body>
</html>

