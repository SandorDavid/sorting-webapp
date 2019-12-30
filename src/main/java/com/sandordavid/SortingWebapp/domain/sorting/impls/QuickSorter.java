package com.sandordavid.SortingWebapp.domain.sorting.impls;

import com.sandordavid.SortingWebapp.domain.sorting.SorterBase;

import java.util.ArrayList;
import java.util.List;

public class QuickSorter<T extends Comparable<T>> extends SorterBase<T> {
    @Override
    protected List<T> doSort(List<T> unsortedList) {
        List<T> returnList = new ArrayList<>(unsortedList);
        sortListInterval(returnList, 0, returnList.size() - 1);
        return returnList;
    }

    private void sortListInterval(List<T> returnList, int fromI, int toI){
        if (fromI >= toI){
            return;
        }

        int pivotI = fromI;
        T pivot = returnList.get(pivotI);

        int leftI = pivotI + 1;
        int rightI = toI;

        while (leftI < rightI){
            while (returnList.get(leftI).compareTo(pivot) <= 0 &&
                    leftI <= rightI &&
                    leftI < toI){
                leftI++;
            }

            while (returnList.get(rightI).compareTo(pivot) >= 0 &&
                    leftI <= rightI &&
                    rightI > fromI) {
                rightI--;
            }

            if (leftI < rightI) {
                T temp = returnList.get(leftI);
                returnList.set(leftI, returnList.get(rightI));
                returnList.set(rightI, temp);
            }
        }

        if (returnList.get(rightI).compareTo(pivot) < 0){
            returnList.set(pivotI, returnList.get(rightI));
            returnList.set(rightI, pivot);
        }

        sortListInterval(returnList, fromI, rightI - 1);
        sortListInterval(returnList, rightI + 1, toI);
    }
}
