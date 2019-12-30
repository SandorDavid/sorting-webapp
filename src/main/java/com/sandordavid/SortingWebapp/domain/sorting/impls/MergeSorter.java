package com.sandordavid.SortingWebapp.domain.sorting.impls;

import com.sandordavid.SortingWebapp.domain.sorting.SorterBase;

import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;

public class MergeSorter<T extends Comparable<T>> extends SorterBase<T> {

    @Override
    protected List<T> doSort(List<T> unsortedList) {
        return splitAndMerge(unsortedList, 0, unsortedList.size());
    }

    private List<T> splitAndMerge(List<T> unsortedList, int from, int to) {
        if (to - from == 1) {
            return new LinkedList<T>(){{
                add(unsortedList.get(from));
            }};
        } else if (to - from == 0) {
            return new LinkedList<>();
        }

        int splittingPoint = from + Math.round( (float)( to - from ) / 2 );
        List<T> leftMergedSubList = splitAndMerge(unsortedList, from, splittingPoint);
        List<T> rightMergedSublist = splitAndMerge(unsortedList, splittingPoint, to);

        List<T> resultMergedSublist = new LinkedList<>();

        Iterator<T> leftIter = leftMergedSubList.iterator();
        Iterator<T> rightIter = rightMergedSublist.iterator();
        T leftListElem = leftIter.next();
        T rightListElem = rightIter.next();

        while(true) {
                if (leftListElem.compareTo(rightListElem) < 0) {
                    resultMergedSublist.add(leftListElem);
                    if(leftIter.hasNext()){
                        leftListElem = leftIter.next();
                    } else {
                        resultMergedSublist.add(rightListElem);
                        rightIter.forEachRemaining(resultMergedSublist::add);
                        break;
                    }
                } else {
                    resultMergedSublist.add(rightListElem);
                    if(rightIter.hasNext()){
                        rightListElem = rightIter.next();
                    } else {
                        resultMergedSublist.add(leftListElem);
                        leftIter.forEachRemaining(resultMergedSublist::add);
                        break;
                    }
                }
            }

        return resultMergedSublist;
    }
}