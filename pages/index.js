import React, { useEffect, useMemo, useState } from 'react'

import HomeTemplate from '../components/template/home'

import api from '../utils/api'
import groupBy from '../utils/groupBy'

const studentId = '3b35fb50-3d5e-41b3-96d6-c5566141fab0'

function Home() {
  const [student, setStudent] = useState(null)
  const [ordersByStatus, setOrdersByStatus] = useState({})

  const name = useMemo(() => `${student?.first_name || ''} ${student?.last_name || ''}`, [student])

  useEffect(() => {
    (async () => setStudent(await api(`/students/${studentId}`)))()
  }, [])

  useEffect(() => {
    (async () => {
      const orders = await api(`/students/${studentId}/orders`)
      const ordersGrouped = await groupBy(orders, 'status')

      setOrdersByStatus(ordersGrouped)
    })()
  }, [])

  return (
    <HomeTemplate
      name={name}
      student={student}
      ordersByStatus={ordersByStatus}
    />
  )
}

export default Home