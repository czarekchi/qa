| Test | Description |
| --- | --- |
| **check element on website** | Tests user login on the website and checks if it redirects to the correct page. |

### Setup

| Actions performed before each test: |
| --- |
| 1. Generate new user credentials. |
| 2. Visit the homepage. |

### Tests

| Test | Description |
| --- | --- |
| **login user with valid credentials without remember me checkbox** | Tests successful user login on the site without selecting the "Remember me" option. |
| **login user with valid credentials with remember me checkbox** | Tests successful user login on the site with the "Remember me" option selected. |

### Test Steps

1. **login user with valid credentials without remember me checkbox**
    - User login.
    - Check if the URL contains the expected fragment.

2. **login user with valid credentials with remember me checkbox**
    - User login with the "Remember me" option.
    - Check if the URL contains the expected fragment.

| Test | Description |
| --- | --- |
| **check element on dashboard** | Tests various elements on the dashboard after logging in. |

### Setup

| Actions performed before each test: |
| --- |
| 1. Generate new user credentials. |
| 2. Visit the homepage. |
| 3. Login with generated credentials. |

### Tests

| Test | Description |
| --- | --- |
| **Add account button** | Checks if the "Add Account" button is visible. |
| **Make payment button** | Checks if the "Make Payment" button is visible. |
| **Total Balance** | Checks if the "Total Balance" element is visible. |
| **Credit Available** | Checks if the "Credit Available" element is visible. |
| **Due Today** | Checks if the "Due Today" element is visible. |
| **Recent Transactions** | Checks if the "Recent Transactions" table is visible. |

### Test Steps

1. **Add account button**
    - Ensure the "Add Account" button is visible.

2. **Make payment button**
    - Ensure the "Make Payment" button is visible.

3. **Total Balance**
    - Ensure the "Total Balance" element is visible.

4. **Credit Available**
    - Ensure the "Credit Available" element is visible.

5. **Due Today**
    - Ensure the "Due Today" element is visible.

6. **Recent Transactions**
    - Ensure the "Recent Transactions" table is visible.