!function(e){var n={};function t(a){if(n[a])return n[a].exports;var o=n[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(a,o,function(n){return e[n]}.bind(null,o));return a},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=14)}({0:function(e,n,t){e.exports=function(){"use strict";return[{locale:"en",pluralRuleFunction:function(e,n){var t=String(e).split("."),a=!t[1],o=Number(t[0])==e,i=o&&t[0].slice(-1),l=o&&t[0].slice(-2);return n?1==i&&11!=l?"one":2==i&&12!=l?"two":3==i&&13!=l?"few":"other":1==e&&a?"one":"other"},fields:{year:{displayName:"year",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{one:"in {0} year",other:"in {0} years"},past:{one:"{0} year ago",other:"{0} years ago"}}},month:{displayName:"month",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{one:"in {0} month",other:"in {0} months"},past:{one:"{0} month ago",other:"{0} months ago"}}},day:{displayName:"day",relative:{0:"today",1:"tomorrow","-1":"yesterday"},relativeTime:{future:{one:"in {0} day",other:"in {0} days"},past:{one:"{0} day ago",other:"{0} days ago"}}},hour:{displayName:"hour",relative:{0:"this hour"},relativeTime:{future:{one:"in {0} hour",other:"in {0} hours"},past:{one:"{0} hour ago",other:"{0} hours ago"}}},minute:{displayName:"minute",relative:{0:"this minute"},relativeTime:{future:{one:"in {0} minute",other:"in {0} minutes"},past:{one:"{0} minute ago",other:"{0} minutes ago"}}},second:{displayName:"second",relative:{0:"now"},relativeTime:{future:{one:"in {0} second",other:"in {0} seconds"},past:{one:"{0} second ago",other:"{0} seconds ago"}}}}},{locale:"en-001",parentLocale:"en"},{locale:"en-150",parentLocale:"en-001"},{locale:"en-AG",parentLocale:"en-001"},{locale:"en-AI",parentLocale:"en-001"},{locale:"en-AS",parentLocale:"en"},{locale:"en-AT",parentLocale:"en-150"},{locale:"en-AU",parentLocale:"en-001"},{locale:"en-BB",parentLocale:"en-001"},{locale:"en-BE",parentLocale:"en-001"},{locale:"en-BI",parentLocale:"en"},{locale:"en-BM",parentLocale:"en-001"},{locale:"en-BS",parentLocale:"en-001"},{locale:"en-BW",parentLocale:"en-001"},{locale:"en-BZ",parentLocale:"en-001"},{locale:"en-CA",parentLocale:"en-001"},{locale:"en-CC",parentLocale:"en-001"},{locale:"en-CH",parentLocale:"en-150"},{locale:"en-CK",parentLocale:"en-001"},{locale:"en-CM",parentLocale:"en-001"},{locale:"en-CX",parentLocale:"en-001"},{locale:"en-CY",parentLocale:"en-001"},{locale:"en-DE",parentLocale:"en-150"},{locale:"en-DG",parentLocale:"en-001"},{locale:"en-DK",parentLocale:"en-150"},{locale:"en-DM",parentLocale:"en-001"},{locale:"en-Dsrt",pluralRuleFunction:function(e,n){return"other"},fields:{year:{displayName:"Year",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Month",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Day",relative:{0:"today",1:"tomorrow","-1":"yesterday"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Hour",relative:{0:"this hour"},relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Minute",relative:{0:"this minute"},relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Second",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}},{locale:"en-ER",parentLocale:"en-001"},{locale:"en-FI",parentLocale:"en-150"},{locale:"en-FJ",parentLocale:"en-001"},{locale:"en-FK",parentLocale:"en-001"},{locale:"en-FM",parentLocale:"en-001"},{locale:"en-GB",parentLocale:"en-001"},{locale:"en-GD",parentLocale:"en-001"},{locale:"en-GG",parentLocale:"en-001"},{locale:"en-GH",parentLocale:"en-001"},{locale:"en-GI",parentLocale:"en-001"},{locale:"en-GM",parentLocale:"en-001"},{locale:"en-GU",parentLocale:"en"},{locale:"en-GY",parentLocale:"en-001"},{locale:"en-HK",parentLocale:"en-001"},{locale:"en-IE",parentLocale:"en-001"},{locale:"en-IL",parentLocale:"en-001"},{locale:"en-IM",parentLocale:"en-001"},{locale:"en-IN",parentLocale:"en-001"},{locale:"en-IO",parentLocale:"en-001"},{locale:"en-JE",parentLocale:"en-001"},{locale:"en-JM",parentLocale:"en-001"},{locale:"en-KE",parentLocale:"en-001"},{locale:"en-KI",parentLocale:"en-001"},{locale:"en-KN",parentLocale:"en-001"},{locale:"en-KY",parentLocale:"en-001"},{locale:"en-LC",parentLocale:"en-001"},{locale:"en-LR",parentLocale:"en-001"},{locale:"en-LS",parentLocale:"en-001"},{locale:"en-MG",parentLocale:"en-001"},{locale:"en-MH",parentLocale:"en"},{locale:"en-MO",parentLocale:"en-001"},{locale:"en-MP",parentLocale:"en"},{locale:"en-MS",parentLocale:"en-001"},{locale:"en-MT",parentLocale:"en-001"},{locale:"en-MU",parentLocale:"en-001"},{locale:"en-MW",parentLocale:"en-001"},{locale:"en-MY",parentLocale:"en-001"},{locale:"en-NA",parentLocale:"en-001"},{locale:"en-NF",parentLocale:"en-001"},{locale:"en-NG",parentLocale:"en-001"},{locale:"en-NL",parentLocale:"en-150"},{locale:"en-NR",parentLocale:"en-001"},{locale:"en-NU",parentLocale:"en-001"},{locale:"en-NZ",parentLocale:"en-001"},{locale:"en-PG",parentLocale:"en-001"},{locale:"en-PH",parentLocale:"en-001"},{locale:"en-PK",parentLocale:"en-001"},{locale:"en-PN",parentLocale:"en-001"},{locale:"en-PR",parentLocale:"en"},{locale:"en-PW",parentLocale:"en-001"},{locale:"en-RW",parentLocale:"en-001"},{locale:"en-SB",parentLocale:"en-001"},{locale:"en-SC",parentLocale:"en-001"},{locale:"en-SD",parentLocale:"en-001"},{locale:"en-SE",parentLocale:"en-150"},{locale:"en-SG",parentLocale:"en-001"},{locale:"en-SH",parentLocale:"en-001"},{locale:"en-SI",parentLocale:"en-150"},{locale:"en-SL",parentLocale:"en-001"},{locale:"en-SS",parentLocale:"en-001"},{locale:"en-SX",parentLocale:"en-001"},{locale:"en-SZ",parentLocale:"en-001"},{locale:"en-Shaw",pluralRuleFunction:function(e,n){return"other"},fields:{year:{displayName:"Year",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Month",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Day",relative:{0:"today",1:"tomorrow","-1":"yesterday"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Hour",relative:{0:"this hour"},relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Minute",relative:{0:"this minute"},relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Second",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}},{locale:"en-TC",parentLocale:"en-001"},{locale:"en-TK",parentLocale:"en-001"},{locale:"en-TO",parentLocale:"en-001"},{locale:"en-TT",parentLocale:"en-001"},{locale:"en-TV",parentLocale:"en-001"},{locale:"en-TZ",parentLocale:"en-001"},{locale:"en-UG",parentLocale:"en-001"},{locale:"en-UM",parentLocale:"en"},{locale:"en-US",parentLocale:"en"},{locale:"en-VC",parentLocale:"en-001"},{locale:"en-VG",parentLocale:"en-001"},{locale:"en-VI",parentLocale:"en"},{locale:"en-VU",parentLocale:"en-001"},{locale:"en-WS",parentLocale:"en-001"},{locale:"en-ZA",parentLocale:"en-001"},{locale:"en-ZM",parentLocale:"en-001"},{locale:"en-ZW",parentLocale:"en-001"}]}()},14:function(e,n,t){window.__locale__={locale:"en",localeData:t(0),isDummyLocale:!1,messages:t(15)}},15:function(e){e.exports=JSON.parse('{"bitbucket.modals.termsAndConditions.title":"We\'ve updated our terms of service","bitbucket.modals.termsAndConditions.description":"As we grow, we occasionally need to update our terms of service. To keep using Bitbucket Cloud,\\nreview and agree to the updated {termsLink}. To learn more, please see our {summaryLink}.","bitbucket.modals.termsAndConditions.link":"terms","bitbucket.modals.termsAndConditions.summaryLink":"Summary of Changes","bitbucket.modals.termsAndConditions.agree":"Agree","bitbucket.modals.termsAndConditions.remindMeLater":"Not now","bitbucket.mentions.legacyEditor.notificationTitle":"User mentions have changed","bitbucket.mentions.legacyEditor.notificationContent":"Prior to saving, mentioning a user will display their name and Atlassian account ID. {learnMoreLink}","bitbucket.mentions.legacyEditor.notificationLearnMoreLink":"Learn more","bitbucket.pullrequest.reviewers.addMoreMessage":"Add more reviewers...","bitbucket.pullrequest.reviewers.noResults":"No matches found. Make sure the person you\'re looking for has access to this repository.","bitbucket.pullrequest.reviewers.inputPlaceholder":"Add reviewers...","bitbucket.pullrequest.reviewers.searchPlaceholder":"Type a full name or public name","bitbucket.pullrequest.largePrWarning.heading":"Looks like you\'ve got a big pull request","bitbucket.pullrequest.largePrWarning.learnMore":"Learn tips for effective code review","bitbucket.pullrequest.largePrWarning.notNow":"Not now","bitbucket.pullrequest.largePrWarning.description":"Your pull request will include {filesChanged} files with {linesChanged} lines added. Dividing large pull requests into smaller chunks can make reviewing code more effective and efficient.","bitkit.cloneDialog.dialogHeading":"Clone this repository","bitkit.cloneDialog.cloneInSourcetreeLink":"Clone in Sourcetree","bitkit.cloneDialog.cloneInSourcetreeMsg":"{link} is a free Git and Mercurial client for {currentOS}.","bitkit.cloneDialog.cloneInXcodeLink":"Clone in Xcode","bitkit.cloneDialog.cloneInXcodeMsg":"{link} is the complete IDE for Apple platforms.","bitbucket.mobileheader.menu.icon.label":"Menu","bitkit.navigation.accountMenu.anonymousUserTooltip":"Anonymous! Click to log in or sign up.","bitkit.navigation.accountMenu.loggedInUserTooltip":"Your profile and settings","bitkit.navigation.accountMenu.viewProfileLink":"View profile","bitkit.navigation.accountMenu.manageAtlassianAccountLink":"Manage Atlassian account","bitkit.navigation.accountMenu.settingsLink":"Bitbucket settings","bitkit.navigation.accountMenu.integrationsLink":"App marketplace","bitkit.navigation.accountMenu.labsLink":"Bitbucket Labs","bitkit.navigation.accountMenu.logOutLink":"Log out","bitkit.navigation.accountMenu.signUpLink":"Sign up","bitkit.navigation.accountMenu.logInLink":"Log in","bitkit.navigation.accountMenu.teamsHeader":"Teams","bitkit.navigation.accountMenu.viewAllTeamsLink":"View all teams","bitkit.navigation.accountMenu.workspacesHeader":"Workspaces","bitkit.navigation.accountMenu.viewAllWorkspacesLink":"View all workspaces","bitkit.navigation.createDrawer.globalBitbucketActionsHeading":"Create","bitkit.navigation.createDrawer.importBitbucketActionsHeading":"Import","bitkit.navigation.createDrawer.containerBitbucketActionsHeading":"Get to work","bitkit.navigation.createDrawer.containerConnectActionsHeading":"Add-ons","bitkit.navigation.homeButtonTooltip":"{Product_Name} home","bitkit.navigation.searchButtonTooltip":"Search","bitkit.navigation.createButtonTooltip":"Create","bitkit.navigation.helpMenuTooltip":"Help","bitkit.navigation.appSwitcherTooltip":"Switch to …","bitkit.navigation.helpMenu.trigger":"Help","bitkit.navigation.helpMenu.tooltip":"Help","bitkit.navigation.helpMenu.helpHeading":"Help","bitkit.navigation.helpMenu.informationHeading":"Information","bitkit.navigation.helpMenu.legalHeading":"Legal","bitkit.navigation.helpMenu.documentationLink":"Documentation","bitkit.navigation.helpMenu.learnGitLink":"Learn Git","bitkit.navigation.helpMenu.keyboardShortcutsButton":"Keyboard shortcuts","bitkit.navigation.helpMenu.tutorialsLink":"Bitbucket tutorials","bitkit.navigation.helpMenu.apiLink":"API","bitkit.navigation.helpMenu.supportLink":"Support","bitkit.navigation.helpMenu.blogLink":"Blog","bitkit.navigation.helpMenu.plansLink":"Plans & pricing","bitkit.navigation.helpMenu.siteStatusLink":"Site status","bitkit.navigation.helpMenu.termsOfServiceLink":"Terms of service","bitkit.navigation.helpMenu.privacyPolicyLink":"Privacy policy","bitkit.navigation.whatsNew":"What\'s new","bitkit.navigation.learnMore":"Learn more","bitkit.navigation.newBlogLabel":"New","bitkit.navigation.resizerButton.label":"Expand or collapse the navigation [ (left bracket)","bitkit.navigation.bitbucketIconTooltip":"Bitbucket","bitkit.navigation.homeButton":"{Product_Name} home","bitkit.navigation.closeButton":"Close","bitkit.navigation.createButton":"Create","bitkit.navigation.searchButton":"Search","bitkit.navigation.searchResults.searchForCode":"Search for code","bitkit.navigation.searchResults.searchForCodeIn":"Search for code in {name}","bitkit.navigation.searchDrawer.placeholder":"Search for repositories, code and more…","bitkit.navigation.searchDrawer.recentlyViewedHeading":"Recently viewed","bitkit.navigation.searchResults.codeHeading":"Code","bitkit.navigation.searchResults.viewAllCodeMatches":"View all code matches","bitkit.navigation.searchResults.viewAllCodeMatchesIn":"View all code matches in {name}","bitkit.navigation.searchResults.repositoriesHeading":"Repositories","bitkit.navigation.searchResults.viewAllRepositoyMatches":"View all repository matches","bitkit.navigation.searchResults.viewMoreRepositories":"View all repositories","bitkit.navigation.searchResults.pullRequestsHeading":"Pull requests","bitkit.navigation.searchResults.issuesHeading":"Issues","bitkit.navigation.appSwitcher.trigger":"Switch to","bitkit.navigation.appSwitcher.tooltip":"Switch to…","bitkit.navigation.appSwitcher.appsHeading":"Applications","bitkit.navigation.appSwitcher.tryLozenge":"Try","bitkit.navigation.appSwitcher.errorFetchingAppsLabel":"Error fetching applications","bitkit.navigation.appSwitcher.retryButtonLabel":"Retry","bitkit.navigation.atlassianSwitcher.trigger":"Switch to","bitkit.navigation.atlassianSwitcher.tooltip":"Switch to…","bitkit.navigation.search.view-all-results.searchIcon":"Search icon"}')}});