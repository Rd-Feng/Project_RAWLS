pragma solidity ^0.4.11;

contract GoogleMap {
    struct Perm {
        string name;
		string desc;
        int256 price;
        bool state;
    }
    string public contractName;
    uint256 public numPerms;
    int256 public payment;
    int256 public total;

    address private company;
    address private user;
    mapping(address => int) balance;
    Perm[4] private permList;

    constructor (address u) public {
        contractName = "Google Map";
        company = msg.sender;
        user = u;
        balance[user] = 0;
        payment = 4; /* number of keys in permission mapping */
        permList[0].name = 'Search History';
        permList[0].price = 2;
        permList[0].state = true;
		permList[0].desc = 'The locations that you have searched';
        permList[1].name = 'Email Address';
        permList[1].price = 1;
        permList[1].state = true;
		permList[1].desc = 'Your email address associated with your GoogleMap app';
        permList[2].name = 'Work Location';
        permList[2].price = 3;
        permList[2].state = true;
		permList[2].desc = 'The location you go regularly is identified as your work location';
        permList[3].name = 'Home Location';
        permList[3].price = 5;
        permList[3].state = true;
		permList[3].desc = 'The location you identified as home in your GoogleMap app';
        numPerms = 4;
        updatePayment();
        updateTotal();
    }

    function getCompany () public view returns (address) {
        return (company);
    }

    function getUser () public view returns (address) {
        return (user);
    }

    function getPerms (uint256 index) public view returns (
            string,
			string,
            int256,
            bool,
            uint256
        ) {
        return (
            permList[index].name,
			permList[index].desc,
            permList[index].price,
            permList[index].state,
            index
        );
    }

    function changeState (uint256 index, bool state) public payable {
        if (msg.sender == company) revert();
        permList[index].state = state;
        updatePayment();
    }

    function updatePayment () private {
        payment = 0;
        for (uint256 i = 0; i < numPerms; i++) {
            if (permList[i].state == true)
                payment += permList[i].price;
        }
    }

    function updateTotal () private {
        total = 0;
        for (uint256 i = 0; i < numPerms; i++) {
            total += permList[i].price;
        }
    }

    function pay () public {
        require (msg.sender == company);
        balance[user] += payment;
    }

    function kill () public {
        require (msg.sender == company);
        selfdestruct (company);
    }

    function () public payable {
        revert ();
    }

}
