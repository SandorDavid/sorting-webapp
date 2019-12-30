package com.sandordavid.SortingWebapp.domain.sorting.impls;

import com.sandordavid.SortingWebapp.domain.sorting.SorterBase;

import java.util.ArrayList;
import java.util.List;

public class SelectionSorter<T extends Comparable<T>> extends SorterBase<T> {

    @Override
    protected List<T> doSort(List<T> unsortedList) {
        List<T> returnList = new ArrayList<>(unsortedList);

        for (int firstI = 0; firstI < returnList.size(); firstI++) {
            int markedLowestI = -1;

            for (int secondI = firstI + 1; secondI < returnList.size(); secondI++) {
                if (returnList.get(firstI).compareTo(returnList.get(secondI)) > 0 &&
                        (markedLowestI == -1 ||
                                returnList.get(markedLowestI).compareTo(returnList.get(secondI)) > 0)){
                    markedLowestI = secondI;
                }
            }
            if (markedLowestI != -1){
                T markedLowest = returnList.get(markedLowestI);
                returnList.set(markedLowestI, returnList.get(firstI));
                returnList.set(firstI, markedLowest);
            }
        }
        return returnList;
    }
}
