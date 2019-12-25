package com.sandordavid.SortingWebapp.domain.sorting;

import com.sandordavid.SortingWebapp.domain.sorting.impls.InsertionSorter;
import com.sandordavid.SortingWebapp.domain.sorting.impls.QuickSorter;
import com.sandordavid.SortingWebapp.domain.sorting.impls.SelectionSorter;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.Parameterized;

import java.lang.reflect.InvocationTargetException;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;

import static org.junit.Assert.assertEquals;


@RunWith(value = Parameterized.class)
public class SorterTest {

    Class sorterImplClass;

    public SorterTest(Class sorterImplClass) {
        this.sorterImplClass = sorterImplClass;
    }

    @Test
    public void sortingShortListOfStringsIsWorking() throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException {
        Sorter<String> sorter = (Sorter<String>) this.sorterImplClass.getDeclaredConstructor().newInstance();
        List<String> unorderedList = Arrays.asList("adbb",",x","fasppg","a","bbb","aaa");
        List<String> orderedList = Arrays.asList(",x", "a", "aaa", "adbb", "bbb", "fasppg");
        assertEquals(orderedList, sorter.sort(unorderedList));
    }

    @Test
    public void sortingShortListOfIntegersIsWorking() throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException {
        Sorter<Integer> sorter = (Sorter<Integer>) this.sorterImplClass.getDeclaredConstructor().newInstance();
        List<Integer> unorderedList = Arrays.asList(4, 2, 643, 5, 23, 4, 523, 4, -462626, 5235, 132, 77, -12, 412);
        List<Integer> orderedList = Arrays.asList(-462626, -12, 2, 4, 4, 4, 5, 23, 77, 132, 412, 523, 643, 5235);
        assertEquals(orderedList, sorter.sort(unorderedList));
    }

    @Parameterized.Parameters
    public static Collection<Class> implementationsToTest() {
        return Arrays.asList(
                InsertionSorter.class,
                QuickSorter.class,
                SelectionSorter.class
        );
    }
}