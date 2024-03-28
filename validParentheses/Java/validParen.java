package validParentheses.Java;

import java.util.Stack;

public class validParen {
    public boolean isValid(String s) {
        /* 
        We use a Stack<Character> to store opening parentheses encountered so far.*/
        Stack<Character> parenStack = new Stack<>();

        // toCharArray converts strings to charracter array
        for(char ch : s.toCharArray()){
            //checking if opening bracket is there or not. If it's there then we push it to prenStack.
            if(ch == '(' || ch == '{' || ch == '['){
                parenStack.push(ch);
            }else{
                //If there have no opening bracket then, there is no need to check for closing bracket or anything else whatsoever. 
                if(parenStack.isEmpty()){
                    return false;
                }

                //Here we will pop the top most element and will check if the opening bracket are matching the closing blacket or not. If it is missmatched then will return false
                char top = parenStack.pop();
                if((ch == ')' && top !='('))
            }
        }
    }
}
