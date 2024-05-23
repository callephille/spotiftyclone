export const getAccessTokenFromStorage = ( ) => {
    const Token = sessionStorage.getItem( 'spotifyToken' );
    if(Token !== null){
        return Token;
    }else {
        return false
    }
};