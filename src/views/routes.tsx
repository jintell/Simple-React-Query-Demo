import {
    LandingPage as HomeView,
    Post as PostView,
    Posts as PostsView,
    User as UserView,
    Users as UsersView,
    AlbumPage as AlbumView,
    NewPost as CreatePostView,
    // Dashboard as DashboardView,
} from '../views';

const routes: any[] = [
    {
        path: '/',
        renderer: (params = {}) => <HomeView {...params} />,
    },
    {
        path: '/posts',
        renderer: (params = {}) => <PostsView {...params} />,
    },
    {
        path: '/posts/:id',
        renderer: (params = {}) => <PostView {...params} />,
    },
    {
        path: '/users/:id',
        renderer: (params = {}) => <UserView {...params} />,
    },
    {
        path: '/users',
        renderer: (params = {}) => <UsersView {...params} />,
    },
    {
        path: '/users/:userId/albums/:id',
        renderer: (params = {}) => <AlbumView {...params} />,
    },
    {
        path: '/posts/user/:userId',
        renderer: (params = {}) => <CreatePostView {...params} />,
    },
];

export default routes;