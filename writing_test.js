/* 
Tests for Multiplication Function:
Expect multiplication(2, 3) to be a number
Expect multiplication(-4, 8) to be a negative number
Expect multiplication(5, 0) to equal 0
Expect multiplication(2, "a") to equal an error

Tests for concatOdds Function
Expect concatOdds([2, 4, 6], [1, 3, 5]) to equal [1, 3, 5]
Expect concatOdds([], [1, 2, 3]) to equal [1, 3]
Expect concatOdds([], []) to equal []
Expect concatOdds([2, 4, 6], [2, 4, 6]) to equal []
Expect concatOdds([1, 3, 5], [1, 3, 5]) to equal [1, 3, 5]

Functional Tests:
1. When a user checks out as a guest, they should be asked if they want to create an account or log in.
2. When a user clicks "Checkout" with an empty cart, they should see an error message asking them to add items to their cart before proceeding.
3. When a user clicks "Checkout" as a guest, they should be taken to a page where they can enter their shipping and payment information without having to log in or create an account.
4. When a user clicks "Checkout" as a logged-in user, they should be taken to a page where their saved shipping and payment information is displayed and they can review and edit it if necessary. 
5. When a user checks out as a logged-in user and completes the transaction, they should see a confirmation page with their order details and a button to return to the shopping page.
6. When the user is at each step of checkout, they should be shown a summary of their order, including the items, prices, and any applicable discounts or taxes.
7. When the user has entered invalid or incomplete information at any point during checkout, they should see an error message prompting them to correct the information before proceeding.
8. When the user wants to edit their information during checkout, they should be able to return to previous steps in checkout and make changes before submitting the order.
9. When the user has items in their cart that are out of stock or otherwise unavailable, they should see an error message informing them that the item is unavailable and prompting them to remove it from their cart.
*/
