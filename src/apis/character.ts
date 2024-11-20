import { axiosInstance } from '.';

export const createCharacter = async (accessToken: string, type: string, name: string) => {
  try {
    const res = await axiosInstance.post(
      '/character/create',
      {
        characterType: type,
        characterName: name,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );

    return res.data;
  } catch (error) {
    console.log(error);
  }
};
