pragma solidity ^0.8.0;
import "@xrc721/contracts/token/XRC721.sol";

contract NFTRewards is XRC721{

    //The name of the nft 
    string public name;

    //The rarity of the nft
    uint  public rarity;

    //The image of the nft
    bytes public image;

    //The rewards that will be given to the NFT holders
    mapping(address =>  uint) rewards;


}