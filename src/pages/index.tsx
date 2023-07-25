/* eslint-disable prettier/prettier */
import * as Tabs from '@radix-ui/react-tabs'
import { useState } from 'react'

import { CreateTodoForm } from '@/client/components/CreateTodoForm'
import { TodoList } from '@/client/components/TodoList'

/**
 * QUESTION 6:
 * -----------
 * Implement quick filter/tab feature so that we can quickly find todos with
 * different statuses ("pending", "completed", or both). The UI should look like
 * the design on Figma.
 *
 * NOTE:
 *  - For this question, you must use RadixUI Tabs component. Its Documentation
 *  is linked below.
 *
 * Documentation references:
 *  - https://www.radix-ui.com/docs/primitives/components/tabs
 */
const Index = () => {
  return (
    <main className="mx-auto w-[480px] pt-12">
      <div className="rounded-12 bg-white p-8 shadow-sm">
        <h1 className="text-center text-4xl font-extrabold text-gray-900">
          Todo App
        </h1>
        <Tabs.Root 
              defaultValue="all">
          <Tabs.List
            className="flex items-center gap-2"
          >
            <Tabs.Trigger
              className={"rounded-full border border-gray-100 px-6 py-3 shadow-sm aria-selected:bg-gray-700 aria-selected:text-white"}
              value="all"
            >
              All
            </Tabs.Trigger>
            <Tabs.Trigger

              className={`rounded-full border border-gray-100 px-6 py-3 shadow-sm aria-selected:bg-gray-700 aria-selected:text-white`}
              value="pending"

            >
              Pending
            </Tabs.Trigger>
            <Tabs.Trigger
              className={`rounded-full border border-gray-100 px-6 py-3 shadow-sm aria-selected:bg-gray-700 aria-selected:text-white`}
              value="complete"
            >
              Complete
            </Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="all">
          <div className="pt-10">
          <TodoList status = "all" />
        </div>
          </Tabs.Content>
          <Tabs.Content value="pending">
          <div className="pt-10">
          <TodoList status = "pending" />
        </div>
          </Tabs.Content>
          <Tabs.Content value="complete">
          <div className="pt-10">
          <TodoList status = "complete" />
        </div>
          </Tabs.Content>
        </Tabs.Root>

        <div className="pt-10">
          <CreateTodoForm />
        </div>
      </div>
    </main>
  )
}

export default Index
