import { axiosFastInstance, axiosInstance } from '.';

export const createInitGoal = async (accessToken: string, areaType: string) => {
  try {
    const res = await axiosInstance.post(
      '/area/create',
      {
        areaType: areaType,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );

    return res.data;
  } catch (error) {}
};

export const sendCheckListData = async (scores: number[], accessToken: string, areaId: string) => {
  try {
    // POST 요청
    const res = await axiosInstance.post(
      `/checkList/create?areaId=${areaId}`,
      {
        firstQ: scores[0],
        secondQ: scores[1],
        thirdQ: scores[2],
        fourthQ: scores[3],
        fifthQ: scores[4],
        sixthQ: scores[5],
        seventhQ: scores[6],
        eighthQ: scores[7],
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );

    return res.data;
  } catch (error) {
    console.error('에러:', error);
  }
};

export const getCheckListAnalysisResult = async (checkListId: string) => {
  try {
    const res = await axiosFastInstance.get(`/generate-missions?check_list_id=${checkListId}`);

    return res.data;
  } catch (error) {
    console.log(error);
  }
};
