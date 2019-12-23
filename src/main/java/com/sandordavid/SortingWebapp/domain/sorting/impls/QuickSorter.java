package com.sandordavid.SortingWebapp.domain.sorting.impls;

import com.sandordavid.SortingWebapp.domain.sorting.SorterBase;

import java.util.List;

public class QuickSorter<T extends Comparable<T>> extends SorterBase<T> {

    @Override
    protected void doSort(List<T> unsortedList) {
        this.sortListInterval(unsortedList, 0, unsortedList.size() - 1);
    }

    private void sortListInterval(List<T> unsortedList, int fromI, int toI){
        if (fromI >= toI){
            return;
        }

        int pivotI = fromI;
        T pivot = unsortedList.get(pivotI);

        int leftI = pivotI + 1;
        int rightI = toI;

        while (leftI < rightI){
            while (unsortedList.get(leftI).compareTo(pivot) <= 0
                    && leftI <= rightI
                    && leftI < toI){
                leftI++;
            }

            while (unsortedList.get(rightI).compareTo(pivot) >= 0
                    && leftI <= rightI
                    && rightI > fromI) {
                rightI--;
            }

            if (leftI < rightI) {
                T temp = unsortedList.get(leftI);
                unsortedList.set(leftI, unsortedList.get(rightI));
                unsortedList.set(rightI, temp);
            }
        }

        if (unsortedList.get(rightI).compareTo(pivot) < 0){
            unsortedList.set(pivotI, unsortedList.get(rightI));
            unsortedList.set(rightI, pivot);
        }

        this.sortListInterval(unsortedList, fromI, rightI - 1);
        this.sortListInterval(unsortedList, rightI + 1, toI);
    }
}
