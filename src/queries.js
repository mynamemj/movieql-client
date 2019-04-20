import gql from 'graphql-tag';

export const HOME_PAGE = gql`
    {
        movies(limit:50,rating:7){
            id
            title
            rating
            medium_cover_image
        }
    }
`;
export const MOVIE_DETAILS= gql`
    query getMovieDetails($movieId:Int!){
  movie(id:$movieId){
    medium_cover_image
    title
    rating
    description_intro
    
		genres
  	  
  }
  suggestion(id:$movieId){
    id
    title
    rating
    medium_cover_image
  }
}

`;
