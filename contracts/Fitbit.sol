pragma solidity ^0.4.11;

contract Fitbit {
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
        contractName = "Fitbit";
        company = msg.sender;
        user = u;
        balance[user] = 0;
        permList[0].name = 'Gender';
        permList[0].price = 2;
        permList[0].state = true;
		permList[0].desc = 'The gender you identify yourself as';
        permList[1].name = 'Age';
        permList[1].price = 1;
        permList[1].state = true;
		permList[1].desc = 'Your age';
        permList[2].name = 'Location';
        permList[2].price = 1;
        permList[2].state = true;
		permList[2].desc = 'Your realtime location while using Fitbit';
        permList[3].name = 'Sleep Cycle';
        permList[3].price = 1;
        permList[3].state = true;
		permList[3].desc = 'Your sleep cycle';
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
            bool
        ) {
        return (
            permList[index].name,
			permList[index].desc,
            permList[index].price,
            permList[index].state
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
