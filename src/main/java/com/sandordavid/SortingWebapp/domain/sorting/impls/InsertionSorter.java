package com.sandordavid.SortingWebapp.domain.sorting.impls;

import com.sandordavid.SortingWebapp.domain.sorting.SorterBase;

import java.util.List;

public class InsertionSorter<T extends Comparable<T>> extends SorterBase<T> {

    @Override
    protected void doSort(List<T> returnList){
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
    }
}
