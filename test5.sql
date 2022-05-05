# You have the following tables with their fields:
# users: user_id, username, password, created_date
# orders: id, user_id, product_id, order_amount, order_date
# products: id, name
#
# In this test you will only be tested on Syntax and validity of the queries, there is no database system running on this laptop
#
# Write two SQL queries that will:
# - List all the users and sum their total life order amounts
#   (Expected output: user_id, username, lifetime_order_amount)
SELECT users.user_id, username, IFNULL(SUM(order_amount),0) FROM users
LEFT JOIN orders on orders.user_id = users.user_id
GROUP BY user_id, username
#
# - List all of the products and concatenate the usernames of the users who bought it
#   (Expected output: product_id, product_name, usernames) (usernames = john@packwire.com,phil@packwire.com)

SELECT product_id, product_name, STRING_AGG(users.usernames,',') from products
LEFT JOIN orders on orders.product_id = products.product_id
LEFT JOIN users on users.user_id = orders.user_id
GROUP BY product_id, product_name
