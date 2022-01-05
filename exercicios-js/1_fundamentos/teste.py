def ArrayChallenge(arr):

    max_profit_val, current_max_val = 0,0

    for price in reversed(arr):

        current_max_val = max(current_max_val, price)
      
        potential_profit = current_max_val - price
       
        max_profit_val = max(potential_profit, max_profit_val)
        

    if (max_profit_val == 0):
      return -1
    else:
      return max_profit_val

  # code goes here
  

# keep this function call here 
print (ArrayChallenge([10,12,4,5,9]))

