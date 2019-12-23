package com.sandordavid.SortingWebapp.domain.sorting.impls;

import com.sandordavid.SortingWebapp.domain.sorting.SorterBase;

import java.util.List;

public class SelectionSorter<T extends Comparable<T>> extends SorterBase<T> {

    @Override
    protected void doSort(List<T> unsortedList) {
        for (int firstI = 0; firstI < unsortedList.size(); firstI++) {
            int markedLowestI = -1;

            for (int secondI = firstI + 1; secondI < unsortedList.size(); secondI++) {
                if (unsortedList.get(firstI).compareTo(unsortedList.get(secondI)) > 0 &&
                        (markedLowestI == -1 ||
                                unsortedList.get(markedLowestI).compareTo(unsortedList.get(secondI)) > 0)){
                    markedLowestI = secondI;
                }
            }
            if (markedLowestI != -1){
                T markedLowest = unsortedList.get(markedLowestI);
                unsortedList.set(markedLowestI, unsortedList.get(firstI));
                unsortedList.set(firstI, markedLowest);
            }
        }
    }
}
