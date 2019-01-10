pragma solidity ^0.4.11;

contract AmazonPrime {
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
        contractName = "Amazon Prime";
        company = msg.sender;
        user = u;
        balance[user] = 0;
        permList[0].name = 'Mailing Addresses';
        permList[0].price = 2;
        permList[0].state = true;
		permList[0].desc = 'Address you use to receive orders';
        permList[1].name = 'Wish List';
        permList[1].price = 1;
        permList[1].state = true;
		permList[1].desc = 'Your Amazon wish list';
        permList[2].name = 'Shopping List';
        permList[2].price = 3;
        permList[2].state = true;
		permList[2].desc = 'Your Amazon shopping list';
        permList[3].name = 'Browse History';
        permList[3].price = 5;
        permList[3].state = true;
		permList[3].desc = 'The products you have browsed before';
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

    function changeState (uint256[] ids, uint256 count) public payable {
        require(msg.sender == user);
        for (uint256 i = 0; i < count; i++)
            permList[ids[i]].state = !permList[ids[i]].state;
        updatePayment();
    }

    function updatePayment () public {
        payment = 0;
        for (uint256 i = 0; i < numPerms; i++) {
            if (permList[i].state == true)
                payment += permList[i].price;
        }
    }

    function updateTotal () public {
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
