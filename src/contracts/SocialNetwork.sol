pragma solidity ^0.5.0;

contract SocialNetwork {
    string public name; // solidity creates getter automatically
    mapping(uint => Post) public posts; // key => value
    uint public postCount = 0;

    struct Post {
        uint id;
        string content;
        uint tipAmount;
        address author;
    }
    
    
    constructor() public {
        name = "Simple Social";
    }

    // create posts
    function createPost(string memory _content) public {
        // create the new post and save it to mapping
       posts[postCount] = Post(postCount,_content , 0, msg.sender);
    
       postCount++;

       // trigger event
        
    }
    // list all posts

    // tip posts w/crypto
}