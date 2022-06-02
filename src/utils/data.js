export const mockUser = {
  access_token: 'accesstoken',
  token_type: 'bearer',
  expires_in: 3600,
  refresh_token: 'refreshtoken',
  user: {
    id: '1000',
    aud: 'authenticated',
    role: 'authenticated',
    email: 'test@user.com',
    email_confirmed_at: '2022-06-01T23:05:57.530572916Z',
    phone: '',
    last_sign_in_at: '2022-06-01T23:05:57.533612651Z',
    app_metadata: {
      provider: 'email',
      providers: ['email'],
    },
    user_metadata: {},
    identities: [
      {
        id: '1000',
        user_id: '1000',
        identity_data: {
          sub: '1000',
        },
        provider: 'email',
        last_sign_in_at: '2022-06-01T23:05:57.528474345Z',
        created_at: '2022-06-01T23:05:57.528516Z',
        updated_at: '2022-06-01T23:05:57.528519Z',
      },
    ],
    created_at: '2022-06-01T23:05:57.52602Z',
    updated_at: '2022-06-01T23:05:57.534943Z',
  },
};

export const mockProfile = [
  {
    id: '1000',
    created_at: '2022-06-01T22:41:16.846914+00:00',
    image: null,
    first_name: 'test',
    bio: null,
    last_name: 'test',
    username: null,
  },
];
