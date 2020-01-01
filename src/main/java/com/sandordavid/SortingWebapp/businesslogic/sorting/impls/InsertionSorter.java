package com.sandordavid.SortingWebapp.businesslogic.sorting.impls;

import com.sandordavid.SortingWebapp.businesslogic.sorting.SorterBase;

import java.util.ArrayList;
import java.util.List;

public class InsertionSorter<T extends Comparable<T>> extends SorterBase<T> {

    @Override
    protected List<T> doSort(List<T> unsortedList) {
        List<T> returnList = new ArrayList<>(unsortedList);

        for (int mainI = 0; mainI < returnList.size(); mainI++) {
            T currentEl = returnList.get(mainI);
            for (int subI = 0; subI < mainI; subI++) {
                if(currentEl.compareTo(returnList.get(subI)) < 0){
                    returnList.remove(mainI);
                    returnList.add(subI, currentEl);
                    break;
                }
            }
        }
        return returnList;
    }
}
