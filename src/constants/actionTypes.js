const arrFiller = (from, to) => {
    const res = [];
    for (; from <= to; from++ ) {
        res.push(from);
    }
    return res;
};

export const LOAD_MOVIES = 'LOAD_MOVIES';

export const START = '_START';

export const SUCCESS = '_SUCCESS';

export const FAIL = '_FAIL';

export const SEARCH_MOVIES = 'SEARCH_MOVIES';

export const OPEN_MOVIE = 'OPEN_MOVIE';

export const LOAD_COMMENTS = 'LOAD_COMMENTS';

export const ADD_COMMENT = 'ADD_COMMENT';

export const DELETE_COMMENT = 'DELETE_COMMENT';

export const CHANGE_RATING = 'CHANGE_RATING';

export const ADD_MOVIE = 'ADD_MOVIE';

export const DELETE_MOVIE = 'DELETE_MOVIE';

export const OPEN_FILTERS = 'OPEN_FILTERS';

export const MOVIE_STYLE = ['ужасы', 'комедия', 'фантастика', 'боевик', 'драмма'];

export const FILTERED_MOVIES = 'FILTERED_MOVIES';

export const SELECT_MOVIE_STYLE = 'SELECT_MOVIE_STYLE';

export const MOVIE_YEAR = arrFiller(1980, 2019);

export const MOVIE_RATING = arrFiller(1, 10);


