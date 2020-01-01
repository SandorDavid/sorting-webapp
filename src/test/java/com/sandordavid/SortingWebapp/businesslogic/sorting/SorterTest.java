package com.sandordavid.SortingWebapp.businesslogic.sorting;

import com.sandordavid.SortingWebapp.businesslogic.sorting.impls.MergeSorter;
import com.sandordavid.SortingWebapp.businesslogic.sorting.impls.InsertionSorter;
import com.sandordavid.SortingWebapp.businesslogic.sorting.impls.QuickSorter;
import com.sandordavid.SortingWebapp.businesslogic.sorting.impls.SelectionSorter;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.Parameterized;

import java.lang.reflect.InvocationTargetException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;

import static org.junit.Assert.assertEquals;


@RunWith(value = Parameterized.class)
public class SorterTest {

    private Class sorterImplClass;
    private Sorter<Integer> sorter;

    public SorterTest(Class sorterImplClass) {
        this.sorterImplClass = sorterImplClass;
    }

    @Before
    public void setup() throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException {
        sorter = (Sorter<Integer>) sorterImplClass.getDeclaredConstructor().newInstance();
    }

    @Test
    public void sortingEmptyListIsWorking(){
        List<Integer> emptyList = new ArrayList<>();
        assertEquals(emptyList, sorter.sort(emptyList));
    }

    @Test
    public void sortingListWithOneElementIsWorking(){
        List<Integer> oneElementList = new ArrayList<Integer>(){{add(2);}};
        assertEquals(oneElementList, sorter.sort(oneElementList));
    }

    @Test
    public void sortingShortListOfIntegersIsWorking() {
        List<Integer> unorderedList = Arrays.asList(4, 2, 643, 5, 23, 4, 523, 4, -462626, 5235, 132, 77, -12, 412);
        List<Integer> orderedList = Arrays.asList(-462626, -12, 2, 4, 4, 4, 5, 23, 77, 132, 412, 523, 643, 5235);
        assertEquals(orderedList, sorter.sort(unorderedList));
    }

    @Parameterized.Parameters
    public static Collection<Class> implementationsToTest() {
        return Arrays.asList(
                InsertionSorter.class,
                MergeSorter.class,
                QuickSorter.class,
                SelectionSorter.class
        );
    }
}