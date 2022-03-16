import React, { useEffect, useState } from "react";
import { useDogList } from "../zustand/useStore";

const List = () => {
  const dogListStore = useDogList();
  const [img, setImg] = useState<string>("");
  useEffect(() => {
    const fetchAsync = async () => {
      dogListStore.fetchDogList();
      if (dogListStore.dogList?.sprites) {
        setImg(dogListStore.dogList.sprites.front_shiny as string);
      }
    };
    fetchAsync();
  }, [dogListStore, img]);
  return (
    <div>
      <img src={`${img}`} alt="Pokemon" className="mx-auto" />
      {img.length && (
        <p className="mx-auto text-center text-white text-3xl">
          Fetching success!
        </p>
      )}
    </div>
  );
};

export default List;
