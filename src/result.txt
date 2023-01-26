
> bike-rental@0.1.0 pretest /home/karthikreddy/Documents/priyanka/react_app/Bike-rentals
> npm install

npm WARN eslint-config-react-app@2.1.0 requires a peer of eslint@^4.1.1 but none is installed. You must install peer dependencies yourself.
npm WARN eslint-loader@1.9.0 requires a peer of eslint@>=1.6.0 <5.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN eslint-plugin-import@2.8.0 requires a peer of eslint@2.x - 4.x but none is installed. You must install peer dependencies yourself.
npm WARN eslint-plugin-jsx-a11y@5.1.1 requires a peer of eslint@^2.10.2 || ^3 || ^4 but none is installed. You must install peer dependencies yourself.
npm WARN eslint-plugin-react@7.4.0 requires a peer of eslint@^3.0.0 || ^4.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})

audited 14453 packages in 33.678s
found 32 vulnerabilities (29 low, 1 moderate, 2 high)
  run `npm audit fix` to fix them, or `npm audit` for details

> bike-rental@0.1.0 test /home/karthikreddy/Documents/priyanka/react_app/Bike-rentals
> rm -rf ./unit.xml && CI=true ./node_modules/.bin/react-scripts test --verbose --env=jsdom --testResultsProcessor ./node_modules/jest-junit-reporter --coverage --collectCoverageFrom=src/App.js --updateSnapshot

 PASS  src/tests/Checkout.test.js
  testing Checkout component
    ✓ checking Checkout content (13ms)

  console.log src/pages/Checkout.jsx:9
    undefined

  console.log src/tests/Checkout.test.js:13
    <NavBar /><Card />

  console.warn node_modules/tiny-warning/dist/tiny-warning.cjs.js:13
    Warning: You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "/" to begin with "/bike-rentals".

  console.warn node_modules/tiny-warning/dist/tiny-warning.cjs.js:13
    Warning: You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "/" to begin with "/bike-rentals".

 PASS  src/tests/SignUpForm.test.js
  ✓ renders without crashing (32ms)
  SignUpForm
    ✓ should render six <div /> (3ms)
    ✓ calls submit function when form is submitted (16ms)
    ✓ should render one <form> (1ms)
    ✓ should render four <label>s (2ms)
    ✓ should render four <input>s (1ms)
    ✓ renders a fname input (2ms)
    ✓ renders a lname input (1ms)
    ✓ renders a email input (2ms)
    ✓ renders a password input (2ms)
    ✓ renders a checkbox input (2ms)
    ✓ valid path (17ms)

 PASS  src/tests/SignInForm.test.js
  ✓ renders without crashing (11ms)
  SignUpForm
    ✓ should render six <div /> (3ms)
    ✓ calls submit function when form is submitted (9ms)
    ✓ should render one <form> (1ms)
    ✓ should render four <label>s (1ms)
    ✓ should render four <input>s (1ms)
    ✓ renders a fname input (2ms)
    ✓ renders a lname input (1ms)
    ✓ should change the state of the Login Component (3ms)
    ✓ should change the state of the Login Component (1ms)

  console.warn node_modules/tiny-warning/dist/tiny-warning.cjs.js:13
    Warning: You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "/" to begin with "/bike-rentals".

 PASS  src/tests/NavBar.test.js
  testing Navbar component
    ✓ should render active class (3ms)
    ✓ should render .navbar-toggler markup (4ms)
    ✓ checking input box state change (3ms)
  NavItem
    ✓ should render .nav-item markup (1ms)
    ✓ should render .navbar-brand markup
    ✓ should render custom tag
  testing SideNav component
    ✓ checking the SideNav navelink router content (2ms)

 PASS  src/tests/MainArea.test.js
  testing  MainArea
    ✓ checking MainArea content (5ms)

  console.log src/pages/MainArea.jsx:10
    {}

  console.error node_modules/react/cjs/react.development.js:188
    Warning: Each child in a list should have a unique "key" prop.
    
    Check the top-level render call using <Row>. See https://fb.me/react-warning-keys for more information.
        in Col (at MainArea.jsx:18)

  console.log src/tests/MainArea.test.js:13
    <NavBar />     <Container />

  console.log src/tests/home2.test.js:13
    <NavBar /><DatePicker /> - <DatePicker />  Search

 PASS  src/tests/home2.test.js
  testing Home component
    ✓ checking home content (5ms)

 PASS  src/App.test.js
  ✓ renders without crashing (11ms)

Test Suites: 7 passed, 7 total
Tests:       33 passed, 33 total
Snapshots:   1 passed, 1 total
Time:        8.738s
Ran all test suites.
----------|----------|----------|----------|----------|-------------------|
File      |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
----------|----------|----------|----------|----------|-------------------|
All files |      100 |      100 |      100 |      100 |                   |
 App.js   |      100 |      100 |      100 |      100 |                   |
----------|----------|----------|----------|----------|-------------------|
  console.warn node_modules/tiny-warning/dist/tiny-warning.cjs.js:13
    Warning: You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "/" to begin with "/bike-rentals".

