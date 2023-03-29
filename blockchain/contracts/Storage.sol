//SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract Storage {
    struct FileInfo {
        string hash;
    }

    FileInfo[] public files;

    function addFile(string memory _hash) public {
        FileInfo memory newFile = FileInfo(_hash);
        files.push(newFile);
    }

    function getFiles() public view returns (string[] memory) {
        string[] memory fileHashes = new string[](files.length);
        for (uint256 i = 0; i < files.length; i++) {
            fileHashes[i] = files[i].hash;
        }
        return fileHashes;
    }
}
